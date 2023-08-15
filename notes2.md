const [startIndex, setStartIndex] = useState(0);
const itemsPerPage = _;
const handleNextClick = () => {
        if (startIndex + itemsPerPage < Object.values('your redux state ie allSongs').length) {
            setStartIndex(startIndex + itemsPerPage);
        }
    };

    const handlePrevClick = () => {
        if (startIndex - itemsPerPage >= 0) {
            setStartIndex(startIndex - itemsPerPage);
        }
    };
