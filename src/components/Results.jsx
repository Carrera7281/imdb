export default function Results(props) {

  const { results } = props

  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  )
}

// export default function Results({ results }) {
//   return {
//     <div>
//       {results.map((result) => (
//         <div key={result.id}>{result.original_title}</div>
//       ))}
//     </div>
//   };
// }