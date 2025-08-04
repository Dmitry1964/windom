import cls from './button-mobile.module.scss';

type ButtonMobileProps = {
  handleButtonMobile: () => void;
  status: boolean;
}

const ButtonMobile = (props : ButtonMobileProps) => {

  const {handleButtonMobile, status} = props;
  return (
    <>
      {status ? (
        <button onClick={handleButtonMobile} className={cls.button_mobile} />
      ) : (
        <button onClick={handleButtonMobile} className={cls.button_mobile_close} />
      )}
    </>
  )
}

export {ButtonMobile}
