export const ArrayIncludesExample = () => {
    let numbers: number[] =[10,20,30,40]
    let hasValue = numbers.includes(20)

    let steps = [
        `초기 배열: [${numbers.join(",")}]`,
        `include(20) 결과: [${hasValue}]`,
    ]


    return(
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h3>배열 includes(값) 사용법</h3>
            <ul>
                { steps.map((step, index)=>(
                    <li key={index}>
                        {step}
                    </li>
                ))}
            </ul>
            <pre>
                {`
                let numbers: number[] = [1,2,3,4]
                let hasValue = numbers.includes(20)
                `}
            </pre>
        </div>
    )
}