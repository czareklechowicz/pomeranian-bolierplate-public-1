import { Block } from '../Block';

import { ReactComponent as BookIcon } from '../../Images/dashboard-images/book-saved.svg';
import { ReactComponent as Code } from '../../Images/dashboard-images/code.svg';
import { ReactComponent as Edit } from '../../Images/dashboard-images/edit.svg';
import { ReactComponent as Messages } from '../../Images/dashboard-images/messages.svg';
import { ReactComponent as PersonalCard } from '../../Images/dashboard-images/personalcard.svg';

import './styles.css';

const blockData = [
  {
    titleData: 'Moje cv',
    iconData: <PersonalCard />,
    textData: 'podgląd cv wraz z doświadczeniem',
    linkData: '/cv',
  },
  {
    titleData: 'Ćwiczenia',
    iconData: <Edit />,
    textData: 'wszystkie wykonane ćwiczenia',
    linkData: '/exercises',
  },
  {
    titleData: 'Blog',
    iconData: <BookIcon />,
    textData: 'wpisy blogowe o technologii front-end',
    linkData: '/blog',
  },
  {
    titleData: 'Tech stack',
    iconData: <Code />,
    textData: 'stack technologiczny realizowany na kursie',
    linkData: '/techstack',
  },
  {
    titleData: 'FAQ',
    iconData: <Messages />,
    textData: 'odpowiedzi na najczęstsze pytania',
    linkData: '/faq',
  },
];

export const Blocks = () => {
  return (
    <div className="blocks-section">
      {blockData.map((id) => (
        <Block
          key={id + id.titleData}
          title={id.titleData}
          icon={id.iconData}
          text={id.textData}
          link={id.linkData}
        />
      ))}
    </div>
  );
};
