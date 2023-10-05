import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Link from "next/link"
import Spinner from "@/components/ui/spinner"

export default function Loading() {
    return (
      <MaxWidthWrapper className='h-32 flex justify-center items-center'>
        <button type='button' className="bg-indigo-500 rounded-lg flex flex-row items-center justify-start px-5 py-2" disabled>
          <Spinner className=""/>
          <span>Processing...</span>
        </button>
      </MaxWidthWrapper>
    )
  }