import { Application } from '@splinetool/runtime';

let splineApp = null;
let isLoaded = false;

function runPerformanceBenchmark() {
    const testIterations = 3;
    let totalDuration = 0;
    for (let i = 0; i < testIterations; i++) {
        const t0 = performance.now();
        const ops = 1_000_000;
        let result = 0;
        for (let j = 0; j < ops; j++) {
            result += Math.sqrt(j) + Math.log(j + 1) + (j % 10);
        }
        const t1 = performance.now();
        totalDuration += (t1 - t0);
    }
    const avgDuration = totalDuration / testIterations;
    return avgDuration;
}

function isDevicePerformantEnough() {
    const avg = runPerformanceBenchmark();
    return avg < 250;
}

async function loadSplineCanvas() {
    if (isLoaded) return;
    const canvas = document.getElementById('canvas');
    const loader = document.getElementById('spline-loader');
    if (!(canvas instanceof HTMLCanvasElement)) {
        console.error('Canvas element not found');
        return;
    }
    try {
        if (loader) {
            loader.classList.remove('opacity-0');
            loader.classList.add('opacity-100');
            updateLoaderText('Inicializando modelo 3D...');
        }
        canvas.style.opacity = '0';
        setTimeout(() => { if (loader) updateLoaderText('Descargando recursos...'); }, 500);
        splineApp = new Application(canvas);
        setTimeout(() => { if (loader) updateLoaderText('Renderizando escena...'); }, 1000);
        await splineApp.load('https://prod.spline.design/Ml3Wz2gV4NlyvJeN/scene.splinecode');
        if (loader) {
            loader.classList.remove('opacity-100');
            loader.classList.add('opacity-0');
        }
        canvas.style.transition = 'opacity 0.5s ease-in-out';
        canvas.style.opacity = '1';
        isLoaded = true;
        console.log('Spline canvas loaded successfully');
    } catch (error) {
        console.error('Error loading Spline canvas:', error);
        if (loader) {
            loader.classList.remove('opacity-100');
            loader.classList.add('opacity-0');
        }
        canvas.style.display = 'none';
    }
}

function updateLoaderText(text) {
    const loader = document.getElementById('spline-loader');
    if (loader) {
        const textElement = loader.querySelector('span');
        if (textElement) {
            textElement.textContent = text;
        }
    }
}

function cleanupSpline() {
    if (splineApp) {
        try {
            splineApp.dispose();
            splineApp = null;
            isLoaded = false;
            console.log('Spline resources cleaned up');
        } catch (error) {
            console.error('Error cleaning up Spline:', error);
        }
    }
}

function initLazySplineLoading() {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isLoaded) {
                loadSplineCanvas();
                observer.disconnect();
            }
        });
    }, {
        rootMargin: '50px',
        threshold: 0.1
    });
    observer.observe(canvas);
}

function shouldLoadSpline() {
    const connection = navigator.connection?.effectiveType;
    const memory = navigator.deviceMemory || 0;
    if (connection === 'slow-2g' || connection === '2g') {
        console.log('Skipping Spline load on slow network');
        return false;
    }
    if (memory && memory < 2) {
        console.log('Low memory reported. Verifying performance...');
        if (!isDevicePerformantEnough()) {
            console.log('Skipping Spline load: low memory + low performance');
            return false;
        }
    }
    if (!memory) {
        console.log('No memory info available. Running performance benchmark...');
        if (!isDevicePerformantEnough()) {
            console.log('Skipping Spline load: unknown memory + low performance');
            return false;
        }
    }
    return true;
}

function initSplineCanvas() {
    if (!shouldLoadSpline()) {
        const canvas = document.getElementById('canvas');
        if (canvas) canvas.style.display = 'none';
        return;
    }
    if (document.visibilityState === 'visible') {
        initLazySplineLoading();
    } else {
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                initLazySplineLoading();
            }
        }, { once: true });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSplineCanvas);
} else {
    initSplineCanvas();
}
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        cleanupSpline();
    }
});
window.addEventListener('beforeunload', cleanupSpline); 