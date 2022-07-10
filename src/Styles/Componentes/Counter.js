export function Counter() {
    function Increment () {
        console.log('Incrementing');
    }

    return (
        <div>
            <h2>0</h2>
            <button type="button" onClick={Increment}>
                Increment
             </button>
        </div>
    );
}