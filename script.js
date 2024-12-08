
document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    
    const skillsChart = new Chart(ctx, {
        type: 'pie', // Pie chart
        data: {
            labels: ['Website Development', 'C#', 'MySQL, SQL', 'Microsoft Proficiency', 'Java'],
            datasets: [{
                data: [90, 85, 80, 90, 65], // Percentages for each skill
                backgroundColor: [
                    '#ff6384', // color for Website Development
                    '#36a2eb', // color for C#
                    '#ffce56', // color for MySQL, SQL
                    '#4bc0c0', // color for Microsoft Proficiency
                    '#9966ff'  // color for Java
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,  // Make the chart responsive
            maintainAspectRatio: false, // Prevent forced aspect ratio to allow dynamic resizing
            plugins: {
                legend: {
                    position: 'top', // Position the legend at the top
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });
});



// JavaScript to manage active link state
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        // Add active class to the clicked link
        this.classList.add('active');
    });
});

// JavaScript to manage active link state
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        // Add active class to the clicked link
        this.classList.add('active');
    });
});




