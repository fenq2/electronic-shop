import React from 'react';

import OrderModal from '../Modals/OrderModal/OrderModal';
import styles from './CardSection.module.scss';
import CardList from './components/CardList/CardList';

interface ICardSectionProps {
  title: string;
}

const CardSection: React.FC<ICardSectionProps> = ({ title }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className={styles.cardSection}>
      <h3 className={styles.cardSection__title}>{title}</h3>
      <CardList setModalShow={setModalShow} />

      <OrderModal
        isOpened={modalShow}
        onHideHandler={() => setModalShow(false)}
      />
    </div>
  );
};

export default CardSection;
