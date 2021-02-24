import './Signet.scss';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default function Signet(props){
    return(
        <li className="Signet">
            
            <div className="info" style= {{backgroundColor: props.couleur}}>
                <img src={'images/' + props.id + '.jpg'} alt={props.titre} />
                <SortIcon className="SortIcon"/>
                <p className="titre">{props.titre}</p>
                <p className="couleur"></p>
                <p className="dateDeModification">{props.dateDeModification}</p>
                <MoreVertIcon className="More"/>
            </div>
        </li>
    );
}
