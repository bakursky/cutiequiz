import {useFormStatus} from 'react-dom'

export default function SubmitButton({ children }) {
const {pending} = useFormStatus
    return (
        <>
            <button
                type="submit"
                disabled={pending}
                className="bg rounded-full p-2 bg-[#EFAE8B] border-2 border-[#ED7844] text-white hover:bg-[#ED7844]">

                    {pending &&(
                        <span>Saving...</span>
                    )}
                    {!pending && children}
                    

            </button>

        </>
    )
}