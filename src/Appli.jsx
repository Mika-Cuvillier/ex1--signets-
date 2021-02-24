import './Appli.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete/>
        <ListeSignets/>
        <AddCircleIcon className="Plus"/>
    </div>
  );
}
