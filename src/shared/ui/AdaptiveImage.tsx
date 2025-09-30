import styled from "styled-components";

interface AdaptiveImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  aspectRatio?: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
  lazy?: boolean;
  breakpoints?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  fallbackFormat?: "jpg" | "png";
}

export const AdaptiveImage = ({
  src,
  alt,
  width = "100%",
  height = "auto",
  aspectRatio,
  objectFit = "cover",
  lazy = true,
  breakpoints = {},
  fallbackFormat = "jpg",
}: AdaptiveImageProps) => {
  
  const { webpSrcSet, fallbackSrc } = generateSrcSets(src, fallbackFormat);
  
  return (
    <ImageWrapper
      $width={width}
      $height={height}
      $aspectRatio={aspectRatio}
      $breakpoints={breakpoints}
    >
      <picture>
        <source 
          srcSet={webpSrcSet} 
          type="image/webp" 
        />
        <source 
          srcSet={generateFallbackSrcSet(src, fallbackFormat)} 
          type={`image/${fallbackFormat}`} 
        />
        <StyledImage
          src={fallbackSrc}
          alt={alt}
          loading={lazy ? "lazy" : "eager"}
          $objectFit={objectFit}
        />
      </picture>
    </ImageWrapper>
  );
};

// Улучшенная генерация srcSet (убрали неиспользуемую переменную)
const generateSrcSets = (src: string, fallbackFormat: string) => {
  const baseName = src.replace(/\.[^/.]+$/, "");
  
  // WebP версии
  const webpSrcSet = `${baseName}.webp 1x, ${baseName}@2x.webp 2x`;
  
  // Fallback версии
  const fallbackSrc = `${baseName}.${fallbackFormat}`;
  
  return { webpSrcSet, fallbackSrc };
};

// Генерация fallback srcSet
const generateFallbackSrcSet = (src: string, fallbackFormat: string) => {
  const baseName = src.replace(/\.[^/.]+$/, "");
  return `${baseName}.${fallbackFormat} 1x, ${baseName}@2x.${fallbackFormat} 2x`;
};

// Styled Components
interface ImageWrapperProps {
	$width: number | string;
	$height: number | string;
	$aspectRatio?: string;
	$breakpoints: {
		mobile?: string;
		tablet?: string;
		desktop?: string;
	};
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  width: ${({ $width }) => typeof $width === 'number' ? `${$width}px` : $width};
  height: ${({ $height }) => typeof $height === 'number' ? `${$height}px` : $height};
  overflow: hidden;
  position: relative;
  
  ${({ $aspectRatio }) => $aspectRatio && `
    aspect-ratio: ${$aspectRatio};
  `}
  
  ${({ $breakpoints, theme }) => $breakpoints.mobile && `
    ${theme.media.mobile} {
      width: ${$breakpoints.mobile};
    }
  `}
  
  ${({ $breakpoints, theme }) => $breakpoints.tablet && `
    ${theme.media.tablet} {
      width: ${$breakpoints.tablet};
    }
  `}
  
  ${({ $breakpoints, theme }) => $breakpoints.desktop && `
    ${theme.media.desktop} {
      width: ${$breakpoints.desktop};
    }
  `}
`;

interface StyledImageProps {
	$objectFit: string;
}

const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: 100%;
  object-fit: ${({ $objectFit }) => $objectFit};
  display: block;
`;