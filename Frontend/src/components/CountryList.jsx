export default function CountryList({ countries }) {
    return (
        <table className="table ">
            <thead className="border-2">
                <tr>
                    <th className="border-2 bg-blue-500">Code</th>
                    <th className="border-2 bg-blue-500">Country</th>
                    <th className="border-2 bg-blue-500">Region</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(countries).map(([code, c]) => (
                    <tr key={code}>
                        <td className="border-2 text-center">{code}</td>
                        <td className="border-2 text-center">{c.country}</td>
                        <td className="border-2 text-center">{c.region}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}