// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['When Ive got time, yeah Ive got time', 'I spent 3 years in Japanese class in highschool to forget most of it'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function getData() {
    console.log('Fetching data');
    const responsePromise = fetch('/data');
    responsePromise.then(handleResponse);
}

function handleResponse(response) { 
    console.log('Handling the response');
    const textPromise = response.text();
    textPromise.then(addDataToDom)
}

function addDataToDom(data) { 
    console.log('Adding data to dom:' + data);
    const dataContainer = document.getElementById('data-container')
    dataContainer.innerText = data;
}

function createMap() {
  const map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 37.422, lng: -122.084}, zoom: 16});
}x