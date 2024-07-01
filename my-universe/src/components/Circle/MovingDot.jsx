import React, { useEffect, useRef, useState } from 'react';

const MovingDot = ({ initialRadius, duration }) => {
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(false);
  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let animationFrameId;

    const draw = (currentTime) => {
      if (!timestamp) {
        setTimestamp(currentTime);
      }
      const elapsed = currentTime - timestamp;
      const progress = (elapsed % duration) / duration;
      const angle = 2 * Math.PI * progress;
      const currentRadius = initialRadius * (1 - progress);

      const x = centerX + currentRadius * Math.cos(angle);
      const y = centerY + currentRadius * Math.sin(angle);

      // 캔버스를 지웁니다
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 점을 그립니다
      ctx.beginPath();
      ctx.arc(x, y, currentRadius, 0, 2 * Math.PI);
      ctx.fillStyle = 'yellow';
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'yellow';
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    };

    if (running) {
      animationFrameId = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [running, timestamp, initialRadius, duration]);

  const handleToggle = () => {
    if (!running) {
      setTimestamp(null);
    }
    setRunning(!running);
  };

  return (
    <div>
      <button onClick={handleToggle}>{running ? 'Off' : 'On'}</button>
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        style={{ display: 'block', margin: 'auto', backgroundColor: '#f0f0f0' }}
      />
    </div>
  );
};

export default MovingDot;
