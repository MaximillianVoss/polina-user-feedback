# Käyttäjäpalaute
Luo React-komponentti nimeltä `UserFeedback`, joka kerää käyttäjän palautetta yksinkertaisella lomakkeella ja näyttää lähetetyt tiedot ruudulla.

### Palaute­lomake sisältää seuraavat elementit:
- Nimi-kenttä (`<input>`)
- Viesti-kenttä (`<textarea>`)
- Lähetä-painike

### Näytä lähetetty palaute:
Kun käyttäjä klikkaa Lähetä painketta, näytä hänen nimensä ja viestinsä lomakkeen alla.

Tyhjennä kentät lähetyksen jälkeen.

**Vaatimukset:**

Tarkista, että molemmat kentät on täytetty ennen palautteen näyttämistä.

**Bonus (valinnainen):**

Lisää aikaleima, joka näyttää milloin palaute lähetettiin.

Säilytä palautteen näyttämislogiikka erillisessä komponentissa.

> [!TIP]
> Voit luoda tilan esim. `const [isSubmitted, setIsSubmitted] = useState(false)`. Käytä sitä hallitsemaan, mitä ja milloin näytetään.

