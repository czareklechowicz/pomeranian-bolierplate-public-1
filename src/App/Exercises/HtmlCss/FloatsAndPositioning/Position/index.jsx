import './styles.css';

export const Position = () => {
  return (
    <div className="position__wrapper">
      <div className="div1">
        <p className="div1__absolute">To jest paragraf!</p>
      </div>
      <div className="div2">
        <span className="div2__sticky">To jest element sticky!</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut
        consequatur sit aperiam minus odit numquam magni sequi pariatur vero.
        Eius quia facere fugiat ullam doloremque! Eos dolores, ducimus soluta
        libero dolorem maiores! Libero iusto exercitationem fugit perspiciatis
        culpa! Illo.
      </div>
      <div className="div3">
        <span className="div3__fixed">To jest element sticky!</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut
        consequatur sit aperiam minus odit numquam magni sequi pariatur vero.
        Eius quia facere fugiat ullam doloremque! Eos dolores, ducimus soluta
        libero dolorem maiores! Libero iusto exercitationem fugit perspiciatis
        culpa! Illo.
      </div>
      <div className="div4">
        <p className="div4__absolute_1">To jest paragraf!</p>
        <p className="div4__absolute_2">To jest paragraf!</p>
        <p className="div4__absolute_3">To jest paragraf!</p>
      </div>
    </div>
  );
};
