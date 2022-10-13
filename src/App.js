import React from 'react';
import './App.css';

function App() {

    const [state, setState] = React.useState({
        name: "",
        age: 0,
        remarks: "",
        newsletter: false,
    })

    // const [nameField, setNameField] = React.useState('');
    // const [ageField, setAgeField] = React.useState(0);
    // const [remarksField, setRemarksField] = React.useState('');
    // const [newsletterField, toggleNewsletterField] = React.useState(false);

    function handleChange(evt) {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setState({
           ...state,
           [evt.target.name] : value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Verstuurd!');
        console.log(state.name);
        console.log(state.age);
        console.log(state.remarks);
        console.log(state.newsletter);
    }

    return (
        // <div>
        //     test
        // </div>
        <>
            <form>
                <fieldset>
                    <legend>Gegevens</legend>

                    <label htmlFor="text-name">Naam: </label>
                    <input type="text" id="text-name" name="name" value={state.name} onChange={handleChange}/>
                    <br/>
                    <br/>

                    <label htmlFor="text-age">Leeftijd: </label>
                    <input type="text" id="text-age" name="age" value={state.age} onChange={handleChange}/>
                    <br/>
                    <br/>
                </fieldset>
                <br/>
                <fieldset>
                    <legend>Jouw review</legend>
                    <label htmlFor="text-remarks">Opmerkingen:</label>
                    <br/>
                    <textarea
                        id="area-remarks"
                        name="remarks"
                        value={state.remarks}
                        placeholder="Wat vond je van het recept?"
                        onChange={handleChange}
                    ></textarea>
                    <br/><br/>

                    <input
                        type="checkbox"
                        id=" checkbox-newsletter"
                        name="newsletter"
                        value={state.newsletter}
                        onChange={handleChange}
                    />
                    <label htmlFor=" checkbox-newsletter"> Ik schrijf me in voor de nieuwsbrief</label>
                    <br/><br/>

                    <button
                        type="submit"

                        onClick={handleSubmit}
                    >
                        Versturen
                    </button>
                </fieldset>

            </form>
        </>
    );
}

export default App;
