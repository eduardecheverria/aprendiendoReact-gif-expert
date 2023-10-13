import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
    return (
        <>
            <div data-testid="test-title">{title}</div>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
    name: 'Fernando Herrera',
    subTitle: 'No hay subtitulo',
    // title: 'No hay titulo',
};
