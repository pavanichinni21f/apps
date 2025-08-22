import { Activity } from "lucide-react";

export default function CareerSection() {
    return (
        <section
            id="career"
            className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 mr-2" />
                    <span className="text-lg font-medium">Join Our Team</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Be part of a dynamic team that's shaping the future
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Be part of a dynamic team that's shaping the future of business
                    consulting
                </p>
                <a
                    href="/career"
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                    View Open Positions
                </a>
            </div>
        </section>
    );
}
