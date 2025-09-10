import { useState } from 'react'

import './App.css'

const usersData = [
	{ id: 1, firstName: 'Иван', lastName: 'Иванов', age: 28, city: 'Москва' },
	{
		id: 2,
		firstName: 'Мария',
		lastName: 'Петрова',
		age: 34,
		city: 'Санкт-Петербург',
	},
	{
		id: 3,
		firstName: 'Павел',
		lastName: 'Сидоров',
		age: 22,
		city: 'Новосибирск',
	},
]


function App() {
	const [sort, setSort] = useState('0')
	const [users] = useState(usersData)

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSort(event.target.value)
	}

	const sortUsers = [...users].sort((a, b) =>
		sort === '1' ? a.age - b.age : b.age - a.age
	)

	return (
		<>
			<select value={sort} onChange={handleChange}>
				<option hidden>Сортировать</option>
				<option value='0'>По убыванию</option>
				<option value='1'>По возрастанию</option>
			</select>
			<table>
				<tbody>
					{sortUsers.map(sortUser => (
						<tr key={sortUser.id}>
							<td style={{ border: '2px solid #fff' }}>{sortUser.lastName}</td>
							<td style={{ border: '2px solid #fff' }}>{sortUser.firstName}</td>
							<td style={{ border: '2px solid #fff' }}>{sortUser.age}</td>
							<td style={{ border: '2px solid #fff' }}>{sortUser.city}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default App
