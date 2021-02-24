import './ListeSignets.scss';
import Signet from './Signet';
import tabSignets from './data/Signets.json';

export default function ListeSignets(props){
    return(
        <div className="ListeSignets">
            <ul className="ul-signets">
                {
                    tabSignets.map(function(sig){
                        return <Signet key={sig.id} titre={sig.titre} couleur={sig.couleur} dateDeModification={sig.dateDeModification} id={sig.id} />
                    })
                }
            </ul>
        </div>
    );
}