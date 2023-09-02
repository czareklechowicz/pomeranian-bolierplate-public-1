import image from './sea.jpg';

import './styles.css';

export const Float = () => {
  return (
    <div>
      <div className="float__image">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          nesciunt quo fuga perferendis, maxime vero explicabo eos. Eius illum
          suscipit, ut libero velit minus accusantium exercitationem.
          Perferendis nostrum placeat sint.
        </p>
        <img src={image} alt="Morze" />
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          vero, commodi est fugiat consectetur, ratione ipsum rem aspernatur ex
          non blanditiis quam facilis? Quam, at adipisci numquam eaque
          repellendus a?
        </div>
      </div>
      <div className="float__layout clearfix">
        <div className="float__layout-left">Float left</div>
        <div className="float__layout-right">Float right</div>
        <div className="float__layout-footer clearfix">Footer</div>
      </div>
    </div>
  );
};
