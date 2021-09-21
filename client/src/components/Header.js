import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Styles/Header.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export const Header = ({ page }) => {
  const { goBack } = useHistory();
  return (
    <div className='header'>
      <div>
        <button className='back-btn' onClick={() => goBack()}>
          <ArrowBackIcon className='back-icon' />
          Back
        </button>
      </div>
      {page === 'ShopPage' ? (
        <div>All smartphones</div>
      ) : (
        <div>Your Shop Cart</div>
      )}
      <div></div>
    </div>
  );
};