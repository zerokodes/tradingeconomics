// API Endpoints
const API_BASE_URL = "https://backend-vqnv.onrender.com/api/v1";

const economicCalendarURL = `${API_BASE_URL}/eventCalendars/getAllEventCalendar`;
const marketDataURL = `${API_BASE_URL}/marketData/getAllKimberaData`;
const metricsEndpoint = `${API_BASE_URL}/metrics/getAllMetrics`;

// Function to fetch Economic Calendar Data
async function fetchEconomicCalendar() {
  try {
    const response = await fetch(economicCalendarURL);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log("Economic Calendar Data:", data);

    const eventList = document
      .getElementById("economic-table")
      .querySelector("tbody");
    eventList.innerHTML = "";

    data.data.forEach((event) => {
      eventList.innerHTML += `
        <tr>
          <td>${event.date}</td>
          <td>${event.event}</td>
          <td>${event.actual || "N/A"}</td>
          <td>${event.forecast || "N/A"}</td>
          <td>${event.previous || "N/A"}</td>
        </tr>`;
    });
  } catch (error) {
    console.error("Error fetching economic calendar:", error);
  }
}

// Market Data Variables
let marketData = [];
let currentIndex = 0;
const resultsPerPage = 15;

// Function to fetch Market Data
async function fetchMarketData() {
  try {
    const response = await fetch(marketDataURL);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log("Market Data:", data);

    if (!Array.isArray(data.data)) {
      throw new Error("Market data is not an array");
    }

    marketData = data.data; // Store the parsed market data array
    currentIndex = 0;
    displayMarketData();
  } catch (error) {
    console.error("Error fetching market data:", error);
  }
}

// Function to display Market Data with Pagination
function displayMarketData() {
  const marketList = document
    .getElementById("market-table")
    .querySelector("tbody");
  marketList.innerHTML = "";

  const slicedData = marketData.slice(
    currentIndex,
    currentIndex + resultsPerPage
  );

  slicedData.forEach((entry) => {
    marketList.innerHTML += `
      <tr>
        <td>${entry.symbol}</td>
        <td>${entry.date}</td>
        <td>${entry.openPrice || "N/A"}</td>
        <td>${entry.highestPrice || "N/A"}</td>
        <td>${entry.lowestPrice || "N/A"}</td>
        <td>${entry.closePrice || "N/A"}</td>
      </tr>`;
  });

  updatePaginationControls();
}

// Function to update pagination controls
function updatePaginationControls() {
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  const pageIndicator = document.getElementById("page-indicator");

  const totalPages = Math.ceil(marketData.length / resultsPerPage);
  const currentPage = Math.floor(currentIndex / resultsPerPage) + 1;

  // Update page number display
  pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;

  // Enable/Disable buttons based on current index
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex + resultsPerPage >= marketData.length;
}

// Event Listeners for Pagination Buttons
document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= resultsPerPage;
    displayMarketData();
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentIndex + resultsPerPage < marketData.length) {
    currentIndex += resultsPerPage;
    displayMarketData();
  }
});

// Function to fetch and populate Metrics Table
async function fetchMetricsData() {
  try {
    const response = await fetch(metricsEndpoint);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log("Metrics Data:", data);

    const metricsTable = document
      .getElementById("metrics-table")
      .querySelector("tbody");
    metricsTable.innerHTML = "";

    data.data.forEach((metric) => {
      metricsTable.innerHTML += `
        <tr>
          <td>${metric.metricName}</td>
          <td>${
            metric.value !== undefined
              ? parseFloat(metric.value).toFixed(2)
              : "N/A"
          }</td>
        </tr>`;
    });
  } catch (error) {
    console.error("Error fetching metrics data:", error);
  }
}

// Function to fetch and display all data on page load
async function fetchAndDisplayData() {
  try {
    await fetchEconomicCalendar();
    console.log("Economic Calendar Data Loaded");

    await fetchMarketData();
    console.log("Market Data Loaded");

    await fetchMetricsData();
    console.log("Metrics Table Populated");
  } catch (error) {
    console.error("Error in data fetching sequence:", error);
  }
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchAndDisplayData();
});
