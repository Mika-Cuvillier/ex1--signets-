import './Entete.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Entete(props){
    return(
        <div className="Entete">
            <p>Signets(Beta)</p>
            <p>Mika Cuvillier <AccountCircleIcon className="Avatar"/></p>
            
        </div>
    );
}