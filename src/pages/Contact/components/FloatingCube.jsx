export default function FloatingCube() {
    return (
        <div className="hidden lg:flex justify-start pt-10 pl-10 opacity-60">
            <div className="cube-scene w-[100px] h-[100px] perspective-[600px]">
                <div className="cube w-full h-full relative transform-style-3d animate-float">
                    {/* Styles moved to index.css */}
                    <div className="cube-face front" style={{ position: 'absolute', width: '100px', height: '100px', border: '2px solid #f9f506', background: 'rgba(249, 245, 6, 0.1)', opacity: 0.8, transform: 'rotateY(0deg) translateZ(50px)' }}></div>
                    <div className="cube-face back" style={{ position: 'absolute', width: '100px', height: '100px', border: '2px solid #f9f506', background: 'rgba(249, 245, 6, 0.1)', opacity: 0.8, transform: 'rotateY(180deg) translateZ(50px)' }}></div>
                    <div className="cube-face right" style={{ position: 'absolute', width: '100px', height: '100px', border: '2px solid #f9f506', background: 'rgba(249, 245, 6, 0.1)', opacity: 0.8, transform: 'rotateY(90deg) translateZ(50px)' }}></div>
                    <div className="cube-face left" style={{ position: 'absolute', width: '100px', height: '100px', border: '2px solid #f9f506', background: 'rgba(249, 245, 6, 0.1)', opacity: 0.8, transform: 'rotateY(-90deg) translateZ(50px)' }}></div>
                    <div className="cube-face top" style={{ position: 'absolute', width: '100px', height: '100px', border: '2px solid #f9f506', background: 'rgba(249, 245, 6, 0.1)', opacity: 0.8, transform: 'rotateX(90deg) translateZ(50px)' }}></div>
                    <div className="cube-face bottom" style={{ position: 'absolute', width: '100px', height: '100px', border: '2px solid #f9f506', background: 'rgba(249, 245, 6, 0.1)', opacity: 0.8, transform: 'rotateX(-90deg) translateZ(50px)' }}></div>
                </div>
            </div>
        </div>
    );
}
