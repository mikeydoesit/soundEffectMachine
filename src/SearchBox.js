const SearchBox = (props) => {
    return (
        <form onSubmit={props.saveSearchTerm}>
        <input
            value={props.searchTerm}
            onChange={props.trackSearchTerm} />
        <button type='submit'>Submit!</button>
        </form>
    )
}

export default SearchBox