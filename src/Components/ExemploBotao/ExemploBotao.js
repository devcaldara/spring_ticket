import './ExemploBotao.css';

const ExemploBotao = (props) =>{

    return(
        <div>
            <button className={props.tipo + " " +  props.size} >{props.nome}</button>
        </div>
    );
}

export default ExemploBotao;