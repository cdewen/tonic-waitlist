import { CircleCheckBig, CircleCheck, Share2 } from 'lucide-react'

export default function ThankYou() {

    const handleShare = () => {
        if (navigator.share) {
          navigator.share({
            title: 'Join Tonic Waitlist',
            text: 'I just joined the waitlist for Tonic! Check it out:',
            url: 'https://tonictheapp.com/',
          }).catch(console.error);
        } else {
          // Fallback for browsers that don't support Web Share API
          alert('Share this link with your friends: https://tonic.com/waitlist');
        }
    }

    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-lg"> {/**card */}
            <div className="flex flex-col space-y-1.5 p-6"> {/**card header*/}
                <div className="flex items-center justify-center mb-4">
                    <CircleCheckBig className="text-green-500 w-12 h-12" />
                </div>
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-center">Thanks for signing up!</h3> {/**card title*/}
                <p className="text-sm text-gray-500 text-center">You're now on the waitlist for Tonic's exciting launch.</p> {/**card description*/}
            </div>
            <div className="p-6 pt-0"> {/**card content*/}
                <p className="text-center mb-4">
                    We're thrilled to have you on board. You'll be among the first to know when we launch.
                </p>
                <ul className="space-y-2">
                <li className="flex items-center">
                <CircleCheck className="text-green-500 w-5 h-5 mr-2" />
                <span>Early access to Tonic</span>
                </li>
                <li className="flex items-center">
                <CircleCheck className="text-green-500 w-5 h-5 mr-2" />
                <span>Exclusive prelaunch updates</span>
                </li>
                <li className="flex items-center">
                <CircleCheck className="text-green-500 w-5 h-5 mr-2" />
                <span>Special offers for waitlist members</span>
                </li>
                </ul>
            </div>
            <div className="flex items-center justify-center p-6 pt-0"> {/**card footer*/}
                <button 
                    onClick={handleShare}
                    className="w-full bg-gray-600 text-white hover:bg-black h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share with friends!
                </button>
            </div>
        </div>
    );
}