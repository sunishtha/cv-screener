console.log('CV Screener');
const data = [
    {
        name: 'Ram ',
        age: 25,
        language: 'Java',
        framework: 'Django',
    },
    {
        name: 'Shyam',
        age: 23,
        language: 'Ruby',
        framework: 'Bootstrap',
    },
    {
        name: 'Laxman',
        age: 22,
        language: 'Python',
        framework: 'Mongo',
    },
    {
        name: 'Shiv',
        age: 24,
        language: 'C++',
        framework: 'angular',
    }
]

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}
const candidates = cvIterator(data);
nextCV();
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV() {
    const currentcandidate = candidates.next().value;
    let profile = document.getElementById('profile');

    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name : ${currentcandidate.name}</li>
    <li class="list-group-item">${currentcandidate.age} Years Old</li>
    <li class="list-group-item">Works on: ${currentcandidate.language}</li>
    <li class="list-group-item">With : ${currentcandidate.framework}</li>
  </ul>`
}
