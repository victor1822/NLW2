import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img 
                            src="https://media-exp1.licdn.com/dms/image/C5603AQEYmEcuWChsmg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=FUaQkOsQh9ldk9of0gjATYBhOfSRrsTVHquAvfFJ6Tg"
                            alt="Victor Sales"
                         />
                         <div>
                             <strong>Victor Sales</strong>
                             <span>Química</span>
                         </div>
                    </header>

                    <p>
                        Entusiasta das melhhores tecnologias de química avançada.
                        <br/><br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={WhatsappIcon} alt="Ícone do whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>

                </article>
    );
}

export default TeacherItem;