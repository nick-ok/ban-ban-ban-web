export const GIPAIICon = ({ size = '100%', className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://w3.org"
      strokeWidth="3"
      stroke="currentColor"
      fill="none"
      className={className}
      style={{
        transformBox: 'fill-box',
        transformOrigin: 'center',
        overflow: 'visible',
      }}
    >
      {/* Центральный узел */}
      <g>
        <circle cx="34.51" cy="29.27" r="4.7" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 1.5,-1.5; 0,0"
          dur="4s"
          repeatCount="indefinite"
        />
      </g>

      {/* Верхний узел */}
      <g>
        <circle cx="34.52" cy="11.43" r="5.82" />
        <line x1="20.17" y1="16.3" x2="28.9" y2="12.93" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; -2,2; 0,0"
          dur="5s"
          repeatCount="indefinite"
        />
      </g>

      {/* Правый узел */}
      <g>
        <circle cx="53.63" cy="31.6" r="5.82" />
        <line x1="38.6" y1="15.59" x2="49.48" y2="27.52" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 2.5,-1; 0,0"
          dur="4.5s"
          repeatCount="indefinite"
        />
      </g>

      {/* Нижний узел */}
      <g>
        <circle cx="34.52" cy="50.57" r="5.82" />
        <line x1="50.07" y1="36.2" x2="38.67" y2="46.49" />
        <line x1="20.31" y1="44.74" x2="28.7" y2="48.63" />
        <line x1="34.51" y1="33.98" x2="34.52" y2="44.74" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; -1,-2.5; 0,0"
          dur="6s"
          repeatCount="indefinite"
        />
      </g>

      {/* Левый нижний узел */}
      <g>
        <circle cx="15.16" cy="42.03" r="5.82" />
        <line x1="18.36" y1="24.13" x2="30.91" y2="46.01" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 2,2; 0,0"
          dur="5.5s"
          repeatCount="indefinite"
        />
      </g>

      {/* Левый верхний узел */}
      <g>
        <circle cx="15.16" cy="19.27" r="5.82" />
        <line x1="17.34" y1="36.63" x2="31.37" y2="16.32" />
        <line x1="20.52" y1="21.55" x2="30.34" y2="27.1" />
        <line x1="39.22" y1="29.8" x2="47.81" y2="30.45" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; -1.5,-2; 0,0"
          dur="4.8s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
};
