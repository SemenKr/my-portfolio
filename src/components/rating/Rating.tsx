import { Icon } from "../Icon.tsx";
import styled, {useTheme} from "styled-components";

type RatingProps = {
    value: 1 | 2 | 3 | 4 | 5;
};

export const Rating = ({ value }: RatingProps) => {
    const theme = useTheme();

    return (
        <RatingWrapper>
            {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                    key={i}
                    name="star"
                    size={18}
                    color={i < value ? theme.colors.primary : theme.colors.border}
                />
            ))}
        </RatingWrapper>
    );
};

const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
