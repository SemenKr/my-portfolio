import { SectionBlock } from '../../components/section/SectionBlock';
import { YandexMap } from './YandexMap';

export const MapBlock = () => {
	return (
		<SectionBlock title="Контакты" description="Наше местоположение">
			<YandexMap
				longitude={ 30.3086 }
				zoom={ 14 }
				markerText="Semen Krekotun - Frontend Developer" />
		</SectionBlock>
	);
}