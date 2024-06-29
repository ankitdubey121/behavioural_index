// Sample data for questions

// Function to create the matrix
// function createMatrix() {
//     const matrixBody = document.getElementById('matrix-body');
//     // const characteristics = ['Integrity', 'Honesty', 'Confidentiality'];

//     characteristics.forEach(characteristic => {
//         const row = document.createElement('tr');
//         const cell = document.createElement('td');
//         const button = document.createElement('button');
//         button.className = 'btn btn-primary';
//         button.innerText = characteristic;
//         button.onclick = () => showQuestions(characteristic);

//         cell.appendChild(button);
//         row.appendChild(cell);

//         matrixBody.appendChild(row);
//     });
// }

// Function to display questions in the modal
const data = [];
const questionsData = {
    'Trust': {
        'Integrity and Honesty': [
            'Have you ever taken responsibility for a mistake that wasn’t entirely your fault? What was the situation, and how did you handle it?',
            'Have you ever faced a situation where you had to make a decision that tested your integrity? What did you do, and what was the result?',
            'Can you give an example of a time when being honest caused you difficulty or conflict? How did you handle it?',
            'Describe a situation where you had to deliver difficult news to a colleague or a client. How did you ensure your communication was honest and transparent?',
            'How have you gone about building trust with your colleagues? Can you share an example?',
            'How have you gone about building trust with your colleagues? Can you share an example?',
            'Imagine you accidentally accessed confidential information meant for another team. What steps would you take to rectify this situation while maintaining trust with both teams?'

        ],
        'Confidentiality': [
            'Can you provide an example of a time when you had to keep sensitive information confidential? How did you manage to maintain confidentiality?',
            'Describe a situation where you were tempted to share confidential information. How did you handle it?',
            'Tell me about a time when you had to refuse to provide information to a colleague or client due to confidentiality concerns. How did you manage the situation?',
            'Have you ever overheard or been part of a discussion where confidential information was being inappropriately shared? What did you do?',
            'Describe a situation where you had to balance the need for confidentiality with the need for transparency. How did you handle it?',
            'Imagine you accidentally received an email with confidential information not intended for you. What steps would you take?',
            'You are working late one evening and notice that a colleague has left their computer unlocked with sensitive client information on the screen. What steps would you take to ensure the information remains confidential and secure?'
        ]
    },
    'Dependability': {
        'Accountability': [
            'Give an example of a significant commitment you made at work. How did you ensure you fulfilled it?',
            'Describe a situation where you had to make a personal sacrifice to meet a work commitment. How did you handle it?',
            'Describe a situation where you had to hold yourself accountable for meeting a goal. What was the goal, and how did you ensure you achieved it?',
            'Can you give an example of a situation where you noticed a problem before anyone else did? How did you take ownership of resolving it?',
            'Describe a situation where a team member was unavailable, and you had to cover for them. How did you handle the additional responsibilities?',
            'Tell me about a project or task that you took ownership of from start to finish. How did you manage it?',
            'Imagine you are part of a team working on a critical project with a tight deadline. Each team member has specific responsibilities, but halfway through the project, you realize that one of your tasks has fallen behind due to an error you made in the initial stages. This delay could potentially jeopardize the entire project’s timeline. What steps would you take immediately upon realizing the error?'
        ],
        'Consistency': [
            'Give an example of how you maintain high performance and consistency in your work.',
            'Describe a situation where you had to perform routine tasks. How do you keep yourself motivated and ensure consistent quality?',
            `Imagine you are part of a team working on a critical project with multiple phases and tight deadlines. Your role involves ensuring that all deliverables meet high-quality standards and are submitted on time. Recently, you've noticed that some tasks are being completed inconsistently, affecting the overall project quality and timeline. How would you address this issue to ensure your work and the team's deliverables`
        ],

        'Adaptability to change': [
            'Tell me about a time when you had to adapt to significant changes at work. How did you remain reliable and dependable during this period?',
            'Describe a situation where unexpected changes occurred. How did you adjust your plans to stay on track?',
            'Imagine you are leading a project that has been meticulously planned for months. Suddenly, due to a shift in market conditions, the entire project scope needs to change drastically, and the deadline has been moved up by several weeks. How would you manage this transition, ensure your team stays motivated, and deliver the project on the new timeline?'
        ],
        'Reliability': [
            'How do you manage multiple commitments to ensure you meet all deadlines?',
            'Share an example of a time when you provided significant support to a team member',
            'can you give me an example of a time when you had to meet a tight deadline or handle a high-pressure situation at work? How did you ensure you delivered on time and maintained quality?',
            'Tell me about a time when you had to collaborate with a difficult or unreliable team member. How did you manage to work effectively together and still achieve the desired outcome',
            `Imagine you're responsible for managing a critical client project that requires weekly status updates and adherence to strict deadlines. One week, due to unforeseen circumstances, you realize you won't be able to meet the deadline for submitting the status report. How would you handle this situation to ensure both the client's expectations are met and the project stays on track?`
        ],
        "Learning from failures": [
            'Tell me about a time when an innovative idea you proposed did not work out. What did you learn from the experience?',
            'Can you describe a failed project and how you used the lessons learned to achieve success in subsequent projects?',
        ],
        "Foresighted": [
            'How would you envision improving our current processes or products? What innovative ideas do you have for the future?',
            'If you had unlimited resources, what innovative project would you pursue for our company? Why?'
        ],
        "curiosity & continious learning": [
            'Can you describe a time when your curiosity led you to learn something new that significantly improved your work?',
            'Tell me about a situation where you had to quickly learn and apply a new skill or knowledge. How did you approach it, and what was the outcome?'
        ],

        'Creative thinking & problem solving': [
            'Describe a time when you faced a problem that required a creative solution. How did you come up with the idea, and what steps did you take to implement it?',
            'Can you share an example of a project where you had to think outside the box to achieve success?'
        ],
        "Risk-Taking and Experimentation": [
            'Tell me about a time when you took a calculated risk to implement a new idea or process. What was the risk, and how did it turn out?',
            'Describe a situation where you tried a new approach that did not work as planned. What did you learn from the experience, and how did you apply that learning in the future?'
        ],
        "Situation Based Question": [
            "Imagine you're working on a well-established project that has been running smoothly for years. You have an idea for a new approach that could potentially improve efficiency but involves significant risk and deviates from the current successful method. How would you propose and implement this new approach?"
        ],
        "Initiative and Proactiveness": [
            'Tell me about a time when you proactively identified an opportunity for innovation in your workplace. What did you do to pursue it?',
            'Can you share an example of how you have taken the initiative to drive a project or idea forward, even without explicit direction from others?'
        ],
        "Resiliance and Adaptibility": [
            'Can you provide an example of a time when you encountered significant obstacles while trying to innovate? How did you overcome them?',
            'Describe a situation where you had to adapt your innovative idea to fit changing circumstances or new information. How did you handle the change?'
        ]
    },
    'Care': {
        "Encouraging and Supportive": [
            'Can you share a recent example of how you encouraged a colleague who was struggling with their workload?',
            "How do you recognize and celebrate your team members' achievements?"
        ],
        'Emotional Intelligence': [
            'How do you usually respond when you notice a colleague is stressed or upset?',
            'Can you provide an example of a time when you adapted your communication style to better connect with a colleague?'
        ],
        'Generosity with Time and Resources': [
            'Have you ever stepped in to help a colleague with their tasks? What was the situation and outcome?',
            'How do you typically share useful information or resources with your team?'
        ],
        'Inclusivity and Team Bonding': [
            "What actions do you take to ensure all team members feel included, especially remote or less visible colleagues?",
            "Did you take an initiative you took to foster team bonding? Can you describe it?"
        ],
        "Advocacy and Championing Others": [
            "Can you give an example of a time you advocated for a colleague’s idea in a meeting?",
            "How do you support colleagues in gaining opportunities like promotions or professional development?"
        ],
        "Empathy in Conflict Resolution": [
            "Describe a situation where you helped resolve a conflict between colleagues.",
            "What approach do you take for resolving conflict between colleagues?"
        ],
        "Personalized Acts of Kindness": [
            "How do you acknowledge and celebrate personal milestones of your colleagues?",
            "Can you share an example of a personalized act of kindness you did for a colleague?"
        ],
        "Transparency and Open Communication": [
            "How do you ensure that important information is shared openly with your team?",
            "Can you give an example of how you have invited and acted on feedback from colleagues?"
        ]
    }
};

var currentBtn = ''

const matrix = document.getElementById('matrix')
matrix.setAttribute("style", 'filter: blur(0.5rem)')
const continueBtn = document.getElementById('continueBtn')
continueBtn.addEventListener("click", e => {
    e.preventDefault()
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    console.log(name, email)
    if (validateEmail(email.value) && name.value) {
        name.setAttribute('readonly', 'true')
        email.setAttribute('readonly', 'true')
        matrix.removeAttribute('style')
        email.setAttribute('style', 'border:2px solid green')
        name.setAttribute('style', 'border:2px solid green')
        continueBtn.innerText = "👍🏼"
        continueBtn.setAttribute('style', "font-size:25px; transition: font-size 0.3s ease-in-out")
        continueBtn.disabled = true
        data.push({'Email': email.value, 'Name': name.value})
        console.log(data)
    } else {
        email.setAttribute('style', 'border:2px solid red')
    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

buttons = document.getElementsByClassName('getBtn')

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', showTrustQuestions);
});


function showTrustQuestions(e) {
    const modalLabel = document.getElementById('questionModalLabel');
    const btnName = e.target;
    const currentBtnClassArray = btnName.getAttribute('class').split(" ")
    const currentBtnClass = currentBtnClassArray[currentBtnClassArray.length - 1]
    currentBtn = btnName
    console.log(currentBtnClass)
    modalLabel.innerText = `Questions for ${btnName.innerText}`;
    const questionForm = document.getElementById('questionForm');
    questionForm.innerHTML = ''
    questionsData[currentBtnClass][btnName.innerText].forEach((element, index) => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        const label = document.createElement('label');
        label.htmlFor = currentBtnClass;
        label.innerText = element;
        const input = document.createElement('textarea');
        input.type = 'text';
        input.className = 'form-control';
        input.id = `${currentBtnClass}_${btnName.innerText}_${index}`;
        input.name = `${currentBtnClass}_${btnName.innerText}_${index}`;
        console.log(input.name)
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        questionForm.appendChild(formGroup);
    });
    $('#questionModal').modal('show');
    $(e.target).removeClass("btn-primary").addClass('btn-light');
}


// Function to handle form submission
function submitForm() {
    const formData = new FormData(document.getElementById('questionForm'));

    // Iterate through all sections in questionsData
    for (const category in questionsData) {
        for (const subCategory in questionsData[category]) {
            const questions = questionsData[category][subCategory];
            questions.forEach((question, index) => {
                // Assume the form input names are in the format `category_subCategory_index`
                const key = `${category}_${subCategory}_${index}`;
                const answer = formData.get(key);
                data.push({ Question: question, Answer: answer || "" });
            });
        }
    }
    console.log(data);
    $('#questionModal').modal('hide');
}


async function sendForReview() {
    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: JSON.stringify(data) })
        });

        if (response.ok) {
            alert('Email sent successfully');
        } else {
            alert('Error sending email');
        }
    } catch (error) {
        console.error('Error:', error);
    }
    console.log(data)
}
