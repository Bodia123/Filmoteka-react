import css from './MovieFirstLoad.module.css';
export const MovieFirstLoad = function () {
  return (
    <div className={css.container}>
      <p className={css.text}>
        Ми шукали-шукали, але не знайли. Спробуйте змінити запит, або виберіть
        щось інше!
      </p>
    </div>
  );
};
