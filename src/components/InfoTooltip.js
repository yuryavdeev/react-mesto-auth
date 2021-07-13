import React from 'react';
import UnionV from '../images/union-v.svg';
import UnionX from '../images/union-x.svg';

function InfoTooltip({ isOpen, onClose, validQuery }) {

    const handleFieldClick = (evt) => {
        evt.target === evt.currentTarget && onClose();
    }

    React.useEffect(() => {
        const handleEsc = (evt) => {
            evt.key === 'Escape' && onClose();
        }

        if (isOpen) {
            document.addEventListener('keyup', handleEsc);
        }

        return () => {
            document.removeEventListener('keyup', handleEsc);
        };
    }, [isOpen, onClose]);

    return (
        <div className={`popup popup-access ${isOpen && 'popup_active'}`} onClick={handleFieldClick}>
            <div className="popup-access__container">
                {
                    validQuery ?
                        <>
                            <img className="popup-access__success" src={UnionV} alt="галочка" />
                            <p className="popup-access__notification">Вы успешно зарегистрировались!</p>
                        </>
                        :
                        <>
                            <img className="popup-access__unsuccess" src={UnionX} alt="крестик" />
                            <p className="popup-access__notification">Что-то пошло не так! Попробуйте ещё раз.</p>
                        </>
                }

                <button className="popup__close" type="button" aria-label="закроем" onClick={onClose}></button>
            </div>
        </div>
    );
}

export default InfoTooltip;