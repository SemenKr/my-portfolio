import styled from "styled-components";
import { useEffect, useRef } from "react";

interface YandexMapProps {
	width?: string;
	height?: string;
	latitude?: number;
	longitude?: number;
	zoom?: number;
	markerText?: string;
}

declare global {
	interface Window {
		ymaps?: {
			ready: (callback: () => void) => void;
			Map: new (element: HTMLElement, options: {
				center: number[];
				zoom: number;
				controls?: string[];
			}) => {
				geoObjects: {
					add: (object: unknown) => void;
				};
			};
			Placemark: new (coordinates: number[], properties: {
				balloonContent?: string;
			}, options: {
				preset?: string;
				iconColor?: string;
			}) => unknown;
		};
		_yandexMapsLoading?: boolean; // ← Добавляем флаг загрузки
	}
}

export const YandexMap = ({
	width = "100%",
	height = "400px",
	latitude = 59.9386,
	longitude = 30.3141,
	zoom = 15,
	markerText = "Мы здесь"
}: YandexMapProps) => {
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const currentMapRef = mapRef.current;

		const initializeMap = () => {
			const container = currentMapRef;
			const ymaps = window.ymaps;

			if (!container || !ymaps) {
				return;
			}

			ymaps.ready(() => {
				if (!container || !ymaps) return;

				try {
					const map = new ymaps.Map(container, {
						center: [latitude, longitude],
						zoom: zoom,
						controls: ['zoomControl', 'fullscreenControl']
					});

					const marker = new ymaps.Placemark(
						[latitude, longitude],
						{
							balloonContent: `
      <div style="padding: 10px;">
        <h3 style="margin: 0 0 10px 0; color: #333;">${markerText}</h3>
        <p style="margin: 0; color: #666;">Добро пожаловать!</p>
      </div>
    `,

						},
						{
							preset: 'islands#icon',
							iconColor: '#FFB400'
						}
					);

					map.geoObjects.add(marker);
				} catch (error) {
					console.error('Error creating Yandex Map:', error);
				}
			});
		};

		// Если API уже загружено
		if (window.ymaps) {
			initializeMap();
		}
		// Если API еще не загружается и не загружено
		else if (!window._yandexMapsLoading) {
			window._yandexMapsLoading = true; // ← Устанавливаем флаг загрузки

			const script = document.createElement('script');
			script.src = 'https://api-maps.yandex.ru/2.1/?apikey=811589ef-ac14-4632-beb5-4befdfc64ab3&lang=ru_RU';
			script.async = true;
			script.onload = () => {
				window._yandexMapsLoading = false; // ← Сбрасываем флаг после загрузки
				initializeMap();
			};
			document.head.appendChild(script);
		}

		return () => {
			if (currentMapRef) {
				currentMapRef.innerHTML = '';
			}
		};
	}, [latitude, longitude, zoom, markerText]);

	return <MapContainer ref={ mapRef } $width={ width } $height={ height } />;
};

const MapContainer = styled.div<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;