import "./style/app.css"
import {useState} from "react";
import {getWeaterCoordinat} from "./lib/http/http";
import Loading from "./components/Loading/Loading";
import TempInfo from "./components/TempInfo/TempInfo";
import Error from "./components/Error/Error";

function App() {
    const [search, setSearch] = useState("");
    const [currentWeather, setCurrentWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState("");
    const isMountedTemInfo = currentWeather && !isLoading && !hasError;

    const handleChangeSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (hasError) {
            setHasError("");
        }
    }

    const handleChangeToInitialState = () => {
        setHasError("");
        setIsLoading(true)
        setCurrentWeather(null)
    }

    const handleSendData = (event) => {
        event.preventDefault();
        if (!search) {
            setHasError("Заполните поле ввода")
            return;
        }
        handleChangeToInitialState();
        getWeaterCoordinat(search).then(response => {
            if (typeof response === "undefined") {
                setHasError("Неккоректный город поиска.")
            } else{
                setCurrentWeather({temp: response, location: search});
            }
            setTimeout(() => {
                setIsLoading(false)
            }, 1000);

        })
    }

    return (
        <div className="app">
            {!isLoading && (
                <form onSubmit={handleSendData}>
                    <input placeholder="Введите регион" value={search} onChange={handleChangeSearch} />
                    <button>Показать погоду</button>
                    {!!hasError && <Error error={hasError}/>}
                    {isMountedTemInfo && (
                        <TempInfo
                            location={currentWeather.location}
                            temp={currentWeather.temp}
                        />
                    )}
                </form>
            )}
            {isLoading && <Loading/>}
        </div>
  );
}

export default App;
