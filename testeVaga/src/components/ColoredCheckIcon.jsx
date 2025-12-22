import { useMemo } from 'react';

/**
 * Componente que renderiza o ícone de check com cor personalizável
 * @param {string} color - Cor do ícone (hex, rgb, nome). Padrão: "#1A3453"
 * @param {string} className - Classes CSS adicionais
 * @param {number} size - Tamanho em pixels para Tailwind (ex: 5 = w-5 h-5)
 * @param {object} props - Outras props para a tag img
 */
const ColoredCheckIcon = ({ 
  color = "#1A3453", // Mantém padrão original, mas pode ser customizado
  className = "", 
  size = 5, // Tamanho Tailwind (5, 6, 8, etc)
  ...props 
}) => {
  const svgUrl = useMemo(() => {
    // SVG string com cor dinâmica
    const svgString = `<svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M75.072 35.4256V38.7676C75.0675 46.6008 72.531 54.2227 67.8408 60.4966C63.1506 66.7705 56.5581 71.3602 49.0463 73.5812C41.5345 75.8022 33.506 75.5355 26.1582 72.8208C18.8104 70.1062 12.537 65.0891 8.27353 58.5178C4.01007 51.9464 1.98503 44.173 2.50043 36.3567C3.01583 28.5404 6.04406 21.1002 11.1335 15.1456C16.2229 9.19098 23.1008 5.04106 30.7414 3.31476C38.3821 1.58845 46.3761 2.37826 53.5312 5.56639" stroke="${color}" stroke-width="4.84335" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75.0721 9.70679L38.747 46.0682L27.8494 35.1707" stroke="${color}" stroke-width="4.84335" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    
    return `data:image/svg+xml;base64,${btoa(svgString)}`;
  }, [color]);

  // Classes base Tailwind + classes personalizadas
  const imgClasses = `w-${size} h-${size} mt-0.5 mr-3 flex-shrink-0 ${className}`;

  return (
    <img 
      src={svgUrl}
      alt="Check icon"
      className={imgClasses.trim()}
      {...props}
    />
  );
};

// Export com configurações pré-definidas
export default ColoredCheckIcon;

// Export auxiliar com cores específicas pré-configuradas
export const CheckIconYellow = (props) => (
  <ColoredCheckIcon color="#FFE492" {...props} />
);

export const CheckIconBlue = (props) => (
  <ColoredCheckIcon color="#1A3453" {...props} />
);

export const CheckIconGreen = (props) => (
  <ColoredCheckIcon color="#10B981" {...props} />
);

export const CheckIconRed = (props) => (
  <ColoredCheckIcon color="#EF4444" {...props} />
);

export const CheckIconPurple = (props) => (
  <ColoredCheckIcon color="#8B5CF6" {...props} />
);