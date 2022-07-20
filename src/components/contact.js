const Contact = () => {
    return (
        <form className="Contact">
            <h1>Contacte</h1>
            <div>
                <label for="name">Votre Nom</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label for="Fname">Votre Prénom</label>
                <input type="text" id="Fname" />
            </div>
            <div>
                <label for="mail">Votre Email</label>
                <input type="email" id="mail" />
            </div>
            <div>
                <label for="MSG">Votre Message</label>
                <textarea />
            </div>
            <div className="D-flex">
                <input type="submit" value="ENVOYER" />
                <input type="reset" value="ANNULER" />
            </div>
        </form>
    )
}

export default Contact