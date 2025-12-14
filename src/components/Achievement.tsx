import React from 'react';

interface Achievement {
    title: string;
    description: string;
    date: string;
}

const achievements: Achievement[] = [
    {
        title: 'Outstanding Teaching Assistant Award',
        description: 'Received the Outstanding Teaching Assistant Award for the academic year 2024–2025 at the University of Georgia, selected among 50+ TAs for excellence in teaching and student support.',
        date: 'April 2025',
    },
];

export const Achievement: React.FC = () => {
    return (
        <section id="achievements" className="bg-secondary py-16 px-8">
            <h2 className="text-4xl font-bold mb-6 text-center text-black">Achievements</h2>
            <div className="w-[100px] h-1 bg-accent mx-auto mb-10"></div>

            <div className="max-w-4xl mx-auto bg-white text-black p-8 rounded-lg shadow-lg">
                <ul className="space-y-6">
                    {achievements.map((achievement, index) => (
                        <li key={index}>
                            <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
                            <p className="mb-1">{achievement.description}</p>
                            <p className="text-sm text-gray-500">{achievement.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Achievement;
