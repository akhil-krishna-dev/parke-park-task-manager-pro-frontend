import timestampUtils from "../../utils/timestampUtils";
import DropDown from "./DropDown";
import "./Table.css";
type TableProps = {
	headers: Header[];
	tableData: Task[];
};
function Table({ headers, tableData }: TableProps) {
	return (
		<table>
			<thead>
				<tr>
					{headers.map((h) => (
						<th key={h.header}>
							{h.header}{" "}
							{h?.dropDown && (
								<DropDown
									header={h.header}
									label={h.dropDown.label}
									options={h.dropDown.options}
								/>
							)}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{tableData.map((td) => (
					<tr key={td.createdAt}>
						<td>{td.title}</td>
						<td>{td.status}</td>
						<td>{td.priority}</td>
						<td>{timestampUtils(td.createdAt)}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
