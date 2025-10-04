// Enhanced Loan Management Application
class EnhancedLoanManager {
    constructor() {
        // Enhanced data structure with comprehensive sample data
        this.data = {
            users: [
                {"id": 1, "name": "Admin User", "email": "admin@loanmanager.com", "role": "admin", "phone": "9000000001", "joinDate": "2024-01-01"},
                {"id": 2, "name": "Ravi Cashier", "email": "cashier@loanmanager.com", "role": "cashier", "phone": "9000000002", "joinDate": "2024-02-01"},
                {"id": 3, "name": "Meera Manager", "email": "manager@loanmanager.com", "role": "manager", "phone": "9000000003", "joinDate": "2024-01-15"}
            ],
            customers: [
                {"id": 1, "name": "Rajesh Kumar", "phone": "9876543210", "altPhone": "9876543211", "address": "123 Main Street, Banjara Hills, Hyderabad - 500034", "photoUrl": "", "occupation": "Shopkeeper", "monthlyIncome": 35000, "status": "active", "joinDate": "2024-07-01", "notes": "Regular customer, good payment history"},
                {"id": 2, "name": "Priya Sharma", "phone": "9876543212", "altPhone": "", "address": "456 Park Road, Secunderabad - 500003", "photoUrl": "", "occupation": "Teacher", "monthlyIncome": 28000, "status": "active", "joinDate": "2024-08-15", "notes": "Government employee, very reliable"},
                {"id": 3, "name": "Amit Patel", "phone": "9876543213", "altPhone": "9876543214", "address": "789 Market Street, Kukatpally, Hyderabad - 500072", "photoUrl": "", "occupation": "Businessman", "monthlyIncome": 55000, "status": "active", "joinDate": "2024-06-20", "notes": "Has multiple businesses, high net worth"},
                {"id": 4, "name": "Sunita Reddy", "phone": "9876543215", "altPhone": "", "address": "321 Garden Lane, Himayat Nagar, Hyderabad - 500029", "photoUrl": "", "occupation": "Housewife", "monthlyIncome": 25000, "status": "active", "joinDate": "2024-09-01", "notes": "Husband runs small business"},
                {"id": 5, "name": "Vikram Singh", "phone": "9876543216", "altPhone": "9876543217", "address": "654 Temple Road, Begumpet, Hyderabad - 500016", "photoUrl": "", "occupation": "Software Engineer", "monthlyIncome": 75000, "status": "active", "joinDate": "2024-05-10", "notes": "IT professional, high income"},
                {"id": 6, "name": "Lakshmi Devi", "phone": "9876543218", "altPhone": "", "address": "88 Flower Market, Old City, Hyderabad - 500002", "photoUrl": "", "occupation": "Flower Vendor", "monthlyIncome": 18000, "status": "active", "joinDate": "2024-08-01", "notes": "Small vendor, needs regular follow-up"},
                {"id": 7, "name": "Kiran Reddy", "phone": "9876543219", "altPhone": "9876543220", "address": "99 Tech Park, HITEC City, Hyderabad - 500081", "photoUrl": "", "occupation": "Manager", "monthlyIncome": 95000, "status": "active", "joinDate": "2024-07-20", "notes": "Corporate employee, excellent credit"},
                {"id": 8, "name": "Sita Kumari", "phone": "9876543221", "altPhone": "", "address": "77 Village Road, Kompally, Hyderabad - 500014", "photoUrl": "", "occupation": "Tailor", "monthlyIncome": 15000, "status": "active", "joinDate": "2024-09-10", "notes": "Small income but regular payments"}
            ],
            guarantors: [
                {"id": 1, "name": "Ramesh Kumar", "phone": "9876543301", "address": "124 Main Street, Banjara Hills", "relationship": "Brother", "occupation": "Engineer"},
                {"id": 2, "name": "Suresh Sharma", "phone": "9876543302", "address": "457 Park Road, Secunderabad", "relationship": "Spouse", "occupation": "Doctor"},
                {"id": 3, "name": "Deepak Patel", "phone": "9876543303", "address": "790 Market Street, Kukatpally", "relationship": "Business Partner", "occupation": "Businessman"},
                {"id": 4, "name": "Raj Reddy", "phone": "9876543304", "address": "322 Garden Lane, Himayat Nagar", "relationship": "Father", "occupation": "Retired"},
                {"id": 5, "name": "Mohan Singh", "phone": "9876543305", "address": "655 Temple Road, Begumpet", "relationship": "Friend", "occupation": "Banker"}
            ],
            loans: [
                {"id": 1, "loanNo": "LN-2024-001", "customerId": 1, "customerName": "Rajesh Kumar", "amount": 50000, "interestRate": 2.5, "duration": 12, "startDate": "2024-08-01", "installment": 4583, "status": "active", "outstandingBalance": 32292, "purpose": "Business Expansion", "guarantorId": 1, "guarantorName": "Ramesh Kumar", "approvedBy": 1, "loanOfficer": 2},
                {"id": 2, "loanNo": "LN-2024-002", "customerId": 2, "customerName": "Priya Sharma", "amount": 25000, "interestRate": 3.0, "duration": 6, "startDate": "2024-09-01", "installment": 5417, "status": "active", "outstandingBalance": 16250, "purpose": "Medical Emergency", "guarantorId": 2, "guarantorName": "Suresh Sharma", "approvedBy": 1, "loanOfficer": 2},
                {"id": 3, "loanNo": "LN-2024-003", "customerId": 3, "customerName": "Amit Patel", "amount": 75000, "interestRate": 2.0, "duration": 18, "startDate": "2024-07-15", "installment": 4861, "status": "active", "outstandingBalance": 58335, "purpose": "Property Purchase", "guarantorId": 3, "guarantorName": "Deepak Patel", "approvedBy": 1, "loanOfficer": 3},
                {"id": 4, "loanNo": "LN-2024-004", "customerId": 4, "customerName": "Sunita Reddy", "amount": 30000, "interestRate": 2.8, "duration": 10, "startDate": "2024-09-15", "installment": 3840, "status": "active", "outstandingBalance": 26880, "purpose": "Home Renovation", "guarantorId": 4, "guarantorName": "Raj Reddy", "approvedBy": 1, "loanOfficer": 2},
                {"id": 5, "loanNo": "LN-2024-005", "customerId": 5, "customerName": "Vikram Singh", "amount": 100000, "interestRate": 2.2, "duration": 24, "startDate": "2024-06-01", "installment": 5100, "status": "active", "outstandingBalance": 76500, "purpose": "Vehicle Purchase", "guarantorId": 5, "guarantorName": "Mohan Singh", "approvedBy": 1, "loanOfficer": 3},
                {"id": 6, "loanNo": "LN-2024-006", "customerId": 6, "customerName": "Lakshmi Devi", "amount": 15000, "interestRate": 3.5, "duration": 8, "startDate": "2024-09-01", "installment": 2437, "status": "active", "outstandingBalance": 12188, "purpose": "Working Capital", "guarantorId": 1, "guarantorName": "Ramesh Kumar", "approvedBy": 1, "loanOfficer": 2},
                {"id": 7, "loanNo": "LN-2024-007", "customerId": 7, "customerName": "Kiran Reddy", "amount": 150000, "interestRate": 2.0, "duration": 36, "startDate": "2024-08-01", "installment": 5417, "status": "active", "outstandingBalance": 140834, "purpose": "Education", "guarantorId": 5, "guarantorName": "Mohan Singh", "approvedBy": 1, "loanOfficer": 3},
                {"id": 8, "loanNo": "LN-2024-008", "customerId": 8, "customerName": "Sita Kumari", "amount": 20000, "interestRate": 3.2, "duration": 12, "startDate": "2024-09-15", "installment": 2133, "status": "active", "outstandingBalance": 19467, "purpose": "Equipment Purchase", "guarantorId": 2, "guarantorName": "Suresh Sharma", "approvedBy": 1, "loanOfficer": 2}
            ],
            payments: [
                {"id": 1, "receiptNo": "RCP-2024-001", "loanId": 1, "loanNo": "LN-2024-001", "customerName": "Rajesh Kumar", "paymentDate": "2024-08-01", "dueDate": "2024-08-01", "amount": 4583, "lateFee": 0, "paymentMode": "Cash", "outstandingAfter": 45417, "cashierId": 2, "notes": "First installment"},
                {"id": 2, "receiptNo": "RCP-2024-002", "loanId": 1, "loanNo": "LN-2024-001", "customerName": "Rajesh Kumar", "paymentDate": "2024-09-01", "dueDate": "2024-09-01", "amount": 4583, "lateFee": 0, "paymentMode": "UPI", "outstandingAfter": 40834, "cashierId": 2, "notes": "On time payment"},
                {"id": 3, "receiptNo": "RCP-2024-003", "loanId": 1, "loanNo": "LN-2024-001", "customerName": "Rajesh Kumar", "paymentDate": "2024-10-01", "dueDate": "2024-10-01", "amount": 4583, "lateFee": 0, "paymentMode": "Bank Transfer", "outstandingAfter": 36251, "cashierId": 2, "notes": "Regular payment"},
                {"id": 4, "receiptNo": "RCP-2024-004", "loanId": 1, "loanNo": "LN-2024-001", "customerName": "Rajesh Kumar", "paymentDate": "2024-11-05", "dueDate": "2024-11-01", "amount": 4583, "lateFee": 0, "paymentMode": "Cash", "outstandingAfter": 31668, "cashierId": 2, "notes": "Paid 4 days late but within grace period"},
                {"id": 5, "receiptNo": "RCP-2024-005", "loanId": 2, "loanNo": "LN-2024-002", "customerName": "Priya Sharma", "paymentDate": "2024-09-01", "dueDate": "2024-09-01", "amount": 5417, "lateFee": 0, "paymentMode": "UPI", "outstandingAfter": 24583, "cashierId": 2, "notes": "First installment"},
                {"id": 6, "receiptNo": "RCP-2024-006", "loanId": 2, "loanNo": "LN-2024-002", "customerName": "Priya Sharma", "paymentDate": "2024-10-01", "dueDate": "2024-10-01", "amount": 5417, "lateFee": 0, "paymentMode": "Cash", "outstandingAfter": 19166, "cashierId": 2, "notes": "Regular payment"},
                {"id": 7, "receiptNo": "RCP-2024-007", "loanId": 3, "loanNo": "LN-2024-003", "customerName": "Amit Patel", "paymentDate": "2024-08-15", "dueDate": "2024-08-15", "amount": 4861, "lateFee": 0, "paymentMode": "Bank Transfer", "outstandingAfter": 85139, "cashierId": 3, "notes": "First installment"},
                {"id": 8, "receiptNo": "RCP-2024-008", "loanId": 3, "loanNo": "LN-2024-003", "customerName": "Amit Patel", "paymentDate": "2024-09-15", "dueDate": "2024-09-15", "amount": 4861, "lateFee": 0, "paymentMode": "UPI", "outstandingAfter": 80278, "cashierId": 3, "notes": "On time"},
                {"id": 9, "receiptNo": "RCP-2024-009", "loanId": 4, "loanNo": "LN-2024-004", "customerName": "Sunita Reddy", "paymentDate": "2024-09-15", "dueDate": "2024-09-15", "amount": 3840, "lateFee": 0, "paymentMode": "UPI", "outstandingAfter": 30000, "cashierId": 2, "notes": "First payment"},
                {"id": 10, "receiptNo": "RCP-2024-010", "loanId": 5, "loanNo": "LN-2024-005", "customerName": "Vikram Singh", "paymentDate": "2024-06-01", "dueDate": "2024-06-01", "amount": 5100, "lateFee": 0, "paymentMode": "Bank Transfer", "outstandingAfter": 116900, "cashierId": 3, "notes": "First installment"},
                {"id": 11, "receiptNo": "RCP-2024-011", "loanId": 5, "loanNo": "LN-2024-005", "customerName": "Vikram Singh", "paymentDate": "2024-07-01", "dueDate": "2024-07-01", "amount": 5100, "lateFee": 0, "paymentMode": "Cash", "outstandingAfter": 111800, "cashierId": 3, "notes": "Regular payment"},
                {"id": 12, "receiptNo": "RCP-2024-012", "loanId": 6, "loanNo": "LN-2024-006", "customerName": "Lakshmi Devi", "paymentDate": "2024-09-10", "dueDate": "2024-09-01", "amount": 2437, "lateFee": 100, "paymentMode": "Cash", "outstandingAfter": 17563, "cashierId": 2, "notes": "Late payment with penalty"},
                {"id": 13, "receiptNo": "RCP-2024-013", "loanId": 7, "loanNo": "LN-2024-007", "customerName": "Kiran Reddy", "paymentDate": "2024-08-01", "dueDate": "2024-08-01", "amount": 5417, "lateFee": 0, "paymentMode": "Bank Transfer", "outstandingAfter": 158583, "cashierId": 3, "notes": "First installment"},
                {"id": 14, "receiptNo": "RCP-2024-014", "loanId": 8, "loanNo": "LN-2024-008", "customerName": "Sita Kumari", "paymentDate": "2024-09-15", "dueDate": "2024-09-15", "amount": 2133, "lateFee": 0, "paymentMode": "Cash", "outstandingAfter": 21867, "cashierId": 2, "notes": "First payment"}
            ],
            settings: {
                companyName: "Simple Loan Finance",
                companyAddress: "123 Finance Street, Hyderabad - 500001",
                companyPhone: "040-12345678",
                companyEmail: "info@simpleloan.com",
                defaultInterestRate: 2.5,
                lateFeeAmount: 100,
                gracePeriodDays: 7,
                currency: "₹",
                financialYearStart: "04-01",
                maxLoanAmount: 500000,
                minLoanAmount: 5000,
                interestRateTemplates: [
                    {"name": "Personal Loan", "rate": 2.5},
                    {"name": "Business Loan", "rate": 2.0},
                    {"name": "Emergency Loan", "rate": 3.0},
                    {"name": "Vehicle Loan", "rate": 2.2},
                    {"name": "Home Loan", "rate": 1.8}
                ]
            }
        };

        this.currentUser = null;
        this.charts = {};
        this.filters = {
            customers: { status: '', search: '' },
            loans: { status: '', purpose: '', search: '' },
            payments: { search: '' }
        };
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.showLogin();
        this.setTodayDate();
    }

    bindEvents() {
        // Login
        document.getElementById('loginForm').addEventListener('submit', (e) => this.handleLogin(e));
        document.getElementById('logoutBtn').addEventListener('click', () => this.logout());

        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchTab(e.target.closest('.nav-item').dataset.tab);
            });
        });

        // Quick Actions
        if (document.getElementById('quickAddCustomer')) {
            document.getElementById('quickAddCustomer').addEventListener('click', () => this.openCustomerModal());
        }
        if (document.getElementById('quickNewLoan')) {
            document.getElementById('quickNewLoan').addEventListener('click', () => this.openLoanModal());
        }
        if (document.getElementById('quickRecordPayment')) {
            document.getElementById('quickRecordPayment').addEventListener('click', () => this.openPaymentModal());
        }

        // Customer Management
        if (document.getElementById('addCustomerBtn')) {
            document.getElementById('addCustomerBtn').addEventListener('click', () => this.openCustomerModal());
        }
        if (document.getElementById('customerForm')) {
            document.getElementById('customerForm').addEventListener('submit', (e) => this.handleCustomerSubmit(e));
        }
        if (document.getElementById('customerSearch')) {
            document.getElementById('customerSearch').addEventListener('input', (e) => this.handleCustomerSearch(e));
        }
        if (document.getElementById('customerStatusFilter')) {
            document.getElementById('customerStatusFilter').addEventListener('change', (e) => this.handleCustomerFilter(e));
        }
        if (document.getElementById('exportCustomersBtn')) {
            document.getElementById('exportCustomersBtn').addEventListener('click', () => this.exportCustomers());
        }

        // Loan Management
        if (document.getElementById('addLoanBtn')) {
            document.getElementById('addLoanBtn').addEventListener('click', () => this.openLoanModal());
        }
        if (document.getElementById('loanForm')) {
            document.getElementById('loanForm').addEventListener('submit', (e) => this.handleLoanSubmit(e));
        }
        if (document.getElementById('loanSearch')) {
            document.getElementById('loanSearch').addEventListener('input', (e) => this.handleLoanSearch(e));
        }
        if (document.getElementById('loanStatusFilter')) {
            document.getElementById('loanStatusFilter').addEventListener('change', (e) => this.handleLoanFilter(e));
        }
        if (document.getElementById('loanPurposeFilter')) {
            document.getElementById('loanPurposeFilter').addEventListener('change', (e) => this.handleLoanFilter(e));
        }
        if (document.getElementById('loanCalculatorBtn')) {
            document.getElementById('loanCalculatorBtn').addEventListener('click', () => this.openCalculator());
        }
        
        // Loan form calculations
        if (document.getElementById('loanAmount')) {
            document.getElementById('loanAmount').addEventListener('input', () => this.calculateLoan());
            document.getElementById('loanRate').addEventListener('change', () => this.calculateLoan());
            document.getElementById('loanDuration').addEventListener('input', () => this.calculateLoan());
        }

        // Payment Management
        if (document.getElementById('recordPaymentBtn')) {
            document.getElementById('recordPaymentBtn').addEventListener('click', () => this.openPaymentModal());
        }
        if (document.getElementById('paymentForm')) {
            document.getElementById('paymentForm').addEventListener('submit', (e) => this.handlePaymentSubmit(e));
        }
        if (document.getElementById('paymentLoan')) {
            document.getElementById('paymentLoan').addEventListener('change', (e) => this.updatePaymentInfo(e.target.value));
        }
        if (document.getElementById('paymentScheduleBtn')) {
            document.getElementById('paymentScheduleBtn').addEventListener('click', () => this.showPaymentSchedule());
        }

        // Calculator
        if (document.getElementById('calcAmount')) {
            document.getElementById('calcAmount').addEventListener('input', () => this.updateCalculator());
            document.getElementById('calcRate').addEventListener('input', () => this.updateCalculator());
            document.getElementById('calcDuration').addEventListener('input', () => this.updateCalculator());
        }

        // Reports
        if (document.getElementById('generateDailyReport')) {
            document.getElementById('generateDailyReport').addEventListener('click', () => this.generateDailyReport());
        }
        if (document.getElementById('generateAgingReport')) {
            document.getElementById('generateAgingReport').addEventListener('click', () => this.generateAgingReport());
        }
        if (document.getElementById('generateOfficerReport')) {
            document.getElementById('generateOfficerReport').addEventListener('click', () => this.generateOfficerReport());
        }

        // Settings
        if (document.getElementById('companyForm')) {
            document.getElementById('companyForm').addEventListener('submit', (e) => this.handleCompanySettings(e));
        }

        // Modal handling
        document.querySelectorAll('.modal-close, .modal-cancel').forEach(btn => {
            btn.addEventListener('click', (e) => this.closeModal(e));
        });

        // Receipt printing
        if (document.getElementById('printReceipt')) {
            document.getElementById('printReceipt').addEventListener('click', () => this.printReceipt());
        }

        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal(e);
            }
        });
    }

    setTodayDate() {
        const today = new Date().toISOString().split('T')[0];
        const dateInputs = ['reportDate', 'paymentDate', 'loanStartDate'];
        dateInputs.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.value = today;
            }
        });
    }

    // Authentication
    showLogin() {
        document.getElementById('loginModal').classList.remove('hidden');
        document.getElementById('app').classList.add('hidden');
    }

    handleLogin(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'admin') {
            this.currentUser = this.data.users[0];
            document.getElementById('currentUser').textContent = this.currentUser.name;
            document.getElementById('loginModal').classList.add('hidden');
            document.getElementById('app').classList.remove('hidden');
            this.loadDashboard();
            this.loadAllData();
            this.showSuccessMessage('Welcome to Enhanced Loan Management System!');
        } else {
            this.showErrorMessage('Invalid credentials. Use admin/admin for demo.');
        }
    }

    logout() {
        this.currentUser = null;
        this.showLogin();
        document.getElementById('loginForm').reset();
        // Destroy charts to prevent memory leaks
        Object.values(this.charts).forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        this.charts = {};
    }

    // Navigation
    switchTab(tabName) {
        if (!tabName) return;
        
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeNavItem = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }

        // Update content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        const activeContent = document.getElementById(tabName);
        if (activeContent) {
            activeContent.classList.add('active');
        }

        // Load specific data
        switch(tabName) {
            case 'dashboard':
                this.loadDashboard();
                break;
            case 'customers':
                this.loadCustomers();
                break;
            case 'loans':
                this.loadLoans();
                break;
            case 'payments':
                this.loadPayments();
                break;
            case 'reports':
                this.loadReports();
                break;
            case 'settings':
                this.loadSettings();
                break;
        }
    }

    // Enhanced Dashboard
    loadDashboard() {
        this.updateDashboardStats();
        this.loadRecentPayments();
        this.loadTopCustomers();
        this.createCharts();
        this.checkOverdueAlerts();
    }

    updateDashboardStats() {
        const stats = this.calculateDashboardStats();
        document.getElementById('totalActiveLoans').textContent = stats.activeLoans;
        document.getElementById('todaysCollections').textContent = `₹${stats.todaysCollections.toLocaleString()}`;
        document.getElementById('overdueCount').textContent = stats.overdueCount;
        document.getElementById('totalOutstanding').textContent = `₹${stats.totalOutstanding.toLocaleString()}`;
        
        // Update efficiency display
        document.getElementById('efficiencyPercent').textContent = `${stats.efficiency}%`;
        document.getElementById('totalCollected').textContent = `₹${stats.totalCollected.toLocaleString()}`;
        document.getElementById('totalExpected').textContent = `₹${stats.totalExpected.toLocaleString()}`;
    }

    calculateDashboardStats() {
        const activeLoans = this.data.loans.filter(loan => loan.status === 'active').length;
        const totalOutstanding = this.data.loans.reduce((sum, loan) => sum + loan.outstandingBalance, 0);
        
        const today = new Date().toISOString().split('T')[0];
        const todaysPayments = this.data.payments.filter(payment => payment.paymentDate === today);
        const todaysCollections = todaysPayments.reduce((sum, payment) => sum + payment.amount, 0);
        
        const overdueLoans = this.calculateOverdueLoans();
        const overdueCount = overdueLoans.length;

        // Calculate collection efficiency
        const totalLoaned = this.data.loans.reduce((sum, loan) => sum + loan.amount + (loan.amount * loan.interestRate * loan.duration / 100), 0);
        const totalCollected = this.data.payments.reduce((sum, payment) => sum + payment.amount, 0);
        const efficiency = totalLoaned > 0 ? Math.round((totalCollected / totalLoaned) * 100) : 87;

        return {
            activeLoans,
            totalOutstanding,
            todaysCollections,
            overdueCount,
            efficiency,
            totalCollected,
            totalExpected: totalLoaned
        };
    }

    createCharts() {
        // Wait for DOM elements to be available
        setTimeout(() => {
            this.createLoanStatusChart();
            this.createMonthlyTrendChart();
        }, 100);
    }

    createLoanStatusChart() {
        const ctx = document.getElementById('loanStatusChart');
        if (!ctx) return;

        // Destroy existing chart
        if (this.charts.loanStatus) {
            this.charts.loanStatus.destroy();
        }

        const activeLoans = this.data.loans.filter(loan => loan.status === 'active').length;
        const closedLoans = this.data.loans.filter(loan => loan.status === 'closed').length;
        const overdueLoans = this.calculateOverdueLoans().length;

        this.charts.loanStatus = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Active', 'Overdue', 'Closed'],
                datasets: [{
                    data: [activeLoans - overdueLoans, overdueLoans, closedLoans],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    createMonthlyTrendChart() {
        const ctx = document.getElementById('monthlyTrendChart');
        if (!ctx) return;

        // Destroy existing chart
        if (this.charts.monthlyTrend) {
            this.charts.monthlyTrend.destroy();
        }

        // Calculate monthly collections for the last 6 months
        const monthlyData = this.getMonthlyCollectionData();

        this.charts.monthlyTrend = new Chart(ctx, {
            type: 'line',
            data: {
                labels: monthlyData.labels,
                datasets: [{
                    label: 'Collections (₹)',
                    data: monthlyData.data,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return 'Collections: ₹' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }

    getMonthlyCollectionData() {
        const months = [];
        const data = [];
        const now = new Date();

        for (let i = 5; i >= 0; i--) {
            const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const monthKey = date.toISOString().substr(0, 7); // YYYY-MM format
            
            months.push(date.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' }));
            
            const monthlyTotal = this.data.payments
                .filter(payment => payment.paymentDate.startsWith(monthKey))
                .reduce((sum, payment) => sum + payment.amount, 0);
            
            data.push(monthlyTotal);
        }

        return { labels: months, data: data };
    }

    loadTopCustomers() {
        const customerStats = this.data.customers.map(customer => {
            const customerLoans = this.data.loans.filter(loan => loan.customerId === customer.id);
            const totalAmount = customerLoans.reduce((sum, loan) => sum + loan.amount, 0);
            const totalOutstanding = customerLoans.reduce((sum, loan) => sum + loan.outstandingBalance, 0);
            
            return {
                ...customer,
                totalLoans: customerLoans.length,
                totalAmount,
                totalOutstanding
            };
        }).sort((a, b) => b.totalAmount - a.totalAmount).slice(0, 5);

        const tbody = document.getElementById('topCustomers');
        if (tbody) {
            tbody.innerHTML = customerStats.map(customer => `
                <tr>
                    <td><strong>${customer.name}</strong></td>
                    <td>${customer.totalLoans}</td>
                    <td>₹${customer.totalAmount.toLocaleString()}</td>
                    <td>₹${customer.totalOutstanding.toLocaleString()}</td>
                </tr>
            `).join('');
        }
    }

    checkOverdueAlerts() {
        const overdueLoans = this.calculateOverdueLoans();
        const alertCard = document.getElementById('overdueAlerts');
        
        if (!alertCard) return;
        
        if (overdueLoans.length > 0) {
            alertCard.classList.remove('hidden');
            const overdueList = document.getElementById('overdueList');
            if (overdueList) {
                overdueList.innerHTML = `
                    <div class="overdue-summary">
                        <p><strong>${overdueLoans.length} loans are overdue</strong></p>
                    </div>
                    <div class="overdue-items">
                        ${overdueLoans.slice(0, 5).map(loan => `
                            <div class="overdue-item">
                                <span><strong>${loan.customerName}</strong> (${loan.loanNo})</span>
                                <span>₹${loan.outstandingBalance.toLocaleString()} - ${loan.daysOverdue} days overdue</span>
                            </div>
                        `).join('')}
                        ${overdueLoans.length > 5 ? `<p><em>...and ${overdueLoans.length - 5} more</em></p>` : ''}
                    </div>
                `;
            }
        } else {
            alertCard.classList.add('hidden');
        }
    }

    loadRecentPayments() {
        const recentPayments = this.data.payments
            .sort((a, b) => new Date(b.paymentDate) - new Date(a.paymentDate))
            .slice(0, 10);

        const tbody = document.getElementById('recentPayments');
        if (tbody) {
            tbody.innerHTML = recentPayments.map(payment => `
                <tr>
                    <td>${this.formatDate(payment.paymentDate)}</td>
                    <td>${payment.customerName}</td>
                    <td>₹${payment.amount.toLocaleString()}</td>
                    <td><span class="status status--info">${payment.paymentMode}</span></td>
                    <td>
                        ${payment.lateFee > 0 ? 
                            '<span class="status status--warning">Late Fee</span>' : 
                            '<span class="status status--success">On Time</span>'
                        }
                    </td>
                </tr>
            `).join('');
        }
    }

    // Enhanced Customer Management
    loadCustomers() {
        this.updateCustomerFilters();
        this.renderCustomersTable();
    }

    updateCustomerFilters() {
        const filteredCustomers = this.getFilteredCustomers();
        this.renderCustomersTable(filteredCustomers);
    }

    getFilteredCustomers() {
        let customers = [...this.data.customers];
        
        if (this.filters.customers.status) {
            customers = customers.filter(customer => customer.status === this.filters.customers.status);
        }
        
        if (this.filters.customers.search) {
            const search = this.filters.customers.search.toLowerCase();
            customers = customers.filter(customer => 
                customer.name.toLowerCase().includes(search) ||
                customer.phone.includes(search) ||
                customer.address.toLowerCase().includes(search) ||
                (customer.altPhone && customer.altPhone.includes(search))
            );
        }
        
        return customers;
    }

    renderCustomersTable(customers = null) {
        if (!customers) customers = this.getFilteredCustomers();
        
        const tbody = document.getElementById('customersTable');
        if (!tbody) return;
        
        if (customers.length === 0) {
            tbody.innerHTML = '<tr><td colspan="9" class="empty-state"><p>No customers found</p></td></tr>';
            return;
        }

        tbody.innerHTML = customers.map(customer => {
            const customerLoans = this.data.loans.filter(loan => loan.customerId === customer.id);
            const totalOutstanding = customerLoans.reduce((sum, loan) => sum + loan.outstandingBalance, 0);
            
            return `
                <tr>
                    <td>
                        <div class="customer-photo">
                            ${customer.name.charAt(0).toUpperCase()}
                        </div>
                    </td>
                    <td><strong>${customer.name}</strong></td>
                    <td>${customer.phone}</td>
                    <td>${customer.occupation}</td>
                    <td>₹${customer.monthlyIncome.toLocaleString()}</td>
                    <td>${customerLoans.length}</td>
                    <td>₹${totalOutstanding.toLocaleString()}</td>
                    <td><span class="status status--${customer.status === 'active' ? 'success' : 'warning'}">${customer.status}</span></td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn btn--sm btn--outline" onclick="loanManager.viewCustomerDetails(${customer.id})">
                                View Details
                            </button>
                            <button class="btn btn--sm btn--outline" onclick="loanManager.editCustomer(${customer.id})">
                                Edit
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }

    handleCustomerSearch(e) {
        this.filters.customers.search = e.target.value;
        this.updateCustomerFilters();
    }

    handleCustomerFilter(e) {
        this.filters.customers.status = e.target.value;
        this.updateCustomerFilters();
    }

    openCustomerModal(customer = null) {
        const modal = document.getElementById('customerModal');
        const form = document.getElementById('customerForm');
        
        if (!modal || !form) return;
        
        if (customer) {
            document.getElementById('customerModalTitle').textContent = 'Edit Customer';
            document.getElementById('customerName').value = customer.name;
            document.getElementById('customerPhone').value = customer.phone;
            document.getElementById('customerAltPhone').value = customer.altPhone || '';
            document.getElementById('customerAddress').value = customer.address;
            document.getElementById('customerOccupation').value = customer.occupation || '';
            document.getElementById('customerIncome').value = customer.monthlyIncome || 0;
            document.getElementById('customerStatus').value = customer.status || 'active';
            document.getElementById('customerNotes').value = customer.notes || '';
            form.dataset.customerId = customer.id;
        } else {
            document.getElementById('customerModalTitle').textContent = 'Add Customer';
            form.reset();
            document.getElementById('customerStatus').value = 'active';
            delete form.dataset.customerId;
        }
        
        modal.classList.remove('hidden');
    }

    editCustomer(customerId) {
        const customer = this.data.customers.find(c => c.id === customerId);
        this.openCustomerModal(customer);
    }

    handleCustomerSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const customerId = form.dataset.customerId;
        
        const customerData = {
            name: document.getElementById('customerName').value.trim(),
            phone: document.getElementById('customerPhone').value.trim(),
            altPhone: document.getElementById('customerAltPhone').value.trim(),
            address: document.getElementById('customerAddress').value.trim(),
            occupation: document.getElementById('customerOccupation').value.trim(),
            monthlyIncome: parseInt(document.getElementById('customerIncome').value) || 0,
            status: document.getElementById('customerStatus').value,
            notes: document.getElementById('customerNotes').value.trim(),
            photoUrl: ''
        };

        // Validation
        if (!this.validatePhone(customerData.phone)) {
            this.showErrorMessage('Please enter a valid 10-digit phone number');
            return;
        }

        if (customerData.altPhone && !this.validatePhone(customerData.altPhone)) {
            this.showErrorMessage('Please enter a valid 10-digit alternative phone number');
            return;
        }

        if (customerId) {
            // Update existing customer
            const customerIndex = this.data.customers.findIndex(c => c.id == customerId);
            this.data.customers[customerIndex] = { ...this.data.customers[customerIndex], ...customerData };
            this.showSuccessMessage('Customer updated successfully');
        } else {
            // Add new customer
            const newId = Math.max(...this.data.customers.map(c => c.id)) + 1;
            customerData.id = newId;
            customerData.joinDate = new Date().toISOString().split('T')[0];
            this.data.customers.push(customerData);
            this.showSuccessMessage('Customer added successfully');
        }

        this.closeModal(e);
        this.loadCustomers();
        this.updateLoanCustomerDropdown();
        this.updateGuarantorDropdown();
    }

    viewCustomerDetails(customerId) {
        const customer = this.data.customers.find(c => c.id === customerId);
        const customerLoans = this.data.loans.filter(loan => loan.customerId === customerId);
        const customerPayments = this.data.payments.filter(payment => 
            customerLoans.some(loan => loan.id === payment.loanId)
        );
        
        const totalLoanAmount = customerLoans.reduce((sum, loan) => sum + loan.amount, 0);
        const totalPaid = customerPayments.reduce((sum, payment) => sum + payment.amount, 0);
        const totalOutstanding = customerLoans.reduce((sum, loan) => sum + loan.outstandingBalance, 0);

        const detailsHTML = `
            <div class="customer-summary">
                <div class="summary-card">
                    <h4>₹${totalLoanAmount.toLocaleString()}</h4>
                    <p>Total Loan Amount</p>
                </div>
                <div class="summary-card">
                    <h4>₹${totalPaid.toLocaleString()}</h4>
                    <p>Total Paid</p>
                </div>
                <div class="summary-card">
                    <h4>₹${totalOutstanding.toLocaleString()}</h4>
                    <p>Outstanding</p>
                </div>
                <div class="summary-card">
                    <h4>${customerLoans.length}</h4>
                    <p>Total Loans</p>
                </div>
            </div>
            
            <div class="customer-info">
                <h4>Customer Information</h4>
                <p><strong>Name:</strong> ${customer.name}</p>
                <p><strong>Phone:</strong> ${customer.phone}</p>
                ${customer.altPhone ? `<p><strong>Alt Phone:</strong> ${customer.altPhone}</p>` : ''}
                <p><strong>Address:</strong> ${customer.address}</p>
                <p><strong>Occupation:</strong> ${customer.occupation}</p>
                <p><strong>Monthly Income:</strong> ₹${customer.monthlyIncome.toLocaleString()}</p>
                <p><strong>Status:</strong> <span class="status status--${customer.status === 'active' ? 'success' : 'warning'}">${customer.status}</span></p>
                <p><strong>Join Date:</strong> ${this.formatDate(customer.joinDate)}</p>
                ${customer.notes ? `<p><strong>Notes:</strong> ${customer.notes}</p>` : ''}
            </div>

            ${customerLoans.length > 0 ? `
                <div class="customer-loans">
                    <h4>Loan History</h4>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Loan ID</th>
                                <th>Amount</th>
                                <th>Purpose</th>
                                <th>Outstanding</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${customerLoans.map(loan => `
                                <tr>
                                    <td>${loan.loanNo}</td>
                                    <td>₹${loan.amount.toLocaleString()}</td>
                                    <td>${loan.purpose}</td>
                                    <td>₹${loan.outstandingBalance.toLocaleString()}</td>
                                    <td><span class="status status--${loan.status === 'active' ? 'success' : 'info'}">${loan.status}</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            ` : ''}
        `;

        document.getElementById('customerDetailsTitle').textContent = `${customer.name} - Details`;
        document.getElementById('customerDetailsBody').innerHTML = detailsHTML;
        document.getElementById('customerDetailsModal').classList.remove('hidden');
    }

    exportCustomers() {
        const customers = this.getFilteredCustomers();
        const csvContent = this.generateCustomerCSV(customers);
        this.downloadCSV(csvContent, 'customers.csv');
        this.showSuccessMessage('Customer data exported successfully');
    }

    generateCustomerCSV(customers) {
        const headers = ['Name', 'Phone', 'Alt Phone', 'Address', 'Occupation', 'Monthly Income', 'Status', 'Join Date', 'Notes'];
        const rows = customers.map(customer => [
            customer.name,
            customer.phone,
            customer.altPhone || '',
            customer.address,
            customer.occupation,
            customer.monthlyIncome,
            customer.status,
            customer.joinDate,
            customer.notes || ''
        ]);
        
        return [headers, ...rows].map(row => 
            row.map(field => `"${field}"`).join(',')
        ).join('\n');
    }

    // Enhanced Loan Management
    loadLoans() {
        this.updateLoanFilters();
        this.updateLoanCustomerDropdown();
        this.updateGuarantorDropdown();
    }

    updateLoanFilters() {
        const filteredLoans = this.getFilteredLoans();
        this.renderLoansTable(filteredLoans);
    }

    getFilteredLoans() {
        let loans = [...this.data.loans];
        const overdueLoans = this.calculateOverdueLoans().map(loan => loan.id);
        
        if (this.filters.loans.status) {
            if (this.filters.loans.status === 'overdue') {
                loans = loans.filter(loan => overdueLoans.includes(loan.id));
            } else {
                loans = loans.filter(loan => loan.status === this.filters.loans.status);
            }
        }
        
        if (this.filters.loans.purpose) {
            loans = loans.filter(loan => loan.purpose === this.filters.loans.purpose);
        }
        
        if (this.filters.loans.search) {
            const search = this.filters.loans.search.toLowerCase();
            loans = loans.filter(loan => 
                loan.customerName.toLowerCase().includes(search) ||
                loan.loanNo.toLowerCase().includes(search) ||
                loan.purpose.toLowerCase().includes(search)
            );
        }
        
        return loans;
    }

    renderLoansTable(loans = null) {
        if (!loans) loans = this.getFilteredLoans();
        
        const tbody = document.getElementById('loansTable');
        if (!tbody) return;
        
        if (loans.length === 0) {
            tbody.innerHTML = '<tr><td colspan="10" class="empty-state"><p>No loans found</p></td></tr>';
            return;
        }

        const overdueLoans = this.calculateOverdueLoans().map(loan => loan.id);

        tbody.innerHTML = loans.map(loan => {
            const isOverdue = overdueLoans.includes(loan.id);
            const statusClass = isOverdue ? 'error' : (loan.status === 'active' ? 'success' : 'info');
            const statusText = isOverdue ? 'overdue' : loan.status;
            
            return `
                <tr>
                    <td><strong>${loan.loanNo}</strong></td>
                    <td>${loan.customerName}</td>
                    <td>₹${loan.amount.toLocaleString()}</td>
                    <td>${loan.interestRate}%</td>
                    <td>${loan.duration} months</td>
                    <td>${loan.purpose}</td>
                    <td>${loan.guarantorName || '-'}</td>
                    <td>₹${loan.outstandingBalance.toLocaleString()}</td>
                    <td><span class="status status--${statusClass}">${statusText}</span></td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn btn--sm btn--outline" onclick="loanManager.viewLoanPayments(${loan.id})">
                                Payments
                            </button>
                            <button class="btn btn--sm btn--outline" onclick="loanManager.viewLoanSchedule(${loan.id})">
                                Schedule
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }

    handleLoanSearch(e) {
        this.filters.loans.search = e.target.value;
        this.updateLoanFilters();
    }

    handleLoanFilter(e) {
        const filterType = e.target.id === 'loanStatusFilter' ? 'status' : 'purpose';
        this.filters.loans[filterType] = e.target.value;
        this.updateLoanFilters();
    }

    openLoanModal() {
        const modal = document.getElementById('loanModal');
        const form = document.getElementById('loanForm');
        
        if (!modal || !form) return;
        
        form.reset();
        document.getElementById('loanRate').value = '2.5';
        document.getElementById('loanStartDate').value = new Date().toISOString().split('T')[0];
        this.calculateLoan();
        modal.classList.remove('hidden');
    }

    updateLoanCustomerDropdown() {
        const select = document.getElementById('loanCustomer');
        if (!select) return;
        
        select.innerHTML = '<option value="">Select Customer</option>' + 
            this.data.customers
                .filter(customer => customer.status === 'active')
                .map(customer => 
                    `<option value="${customer.id}">${customer.name} - ${customer.phone}</option>`
                ).join('');
    }

    updateGuarantorDropdown() {
        const select = document.getElementById('loanGuarantor');
        if (!select) return;
        
        select.innerHTML = '<option value="">Select Guarantor</option>' + 
            this.data.guarantors.map(guarantor => 
                `<option value="${guarantor.id}">${guarantor.name} - ${guarantor.relationship}</option>`
            ).join('');
    }

    calculateLoan() {
        const amount = parseFloat(document.getElementById('loanAmount').value) || 0;
        const rate = parseFloat(document.getElementById('loanRate').value) || 0;
        const duration = parseInt(document.getElementById('loanDuration').value) || 0;

        if (amount > 0 && rate > 0 && duration > 0) {
            const totalInterest = (amount * rate * duration / 100);
            const totalAmount = amount + totalInterest;
            const monthlyInstallment = Math.round(totalAmount / duration);

            document.getElementById('totalAmount').textContent = totalAmount.toLocaleString();
            document.getElementById('totalInterest').textContent = totalInterest.toLocaleString();
            document.getElementById('monthlyInstallment').textContent = monthlyInstallment.toLocaleString();
        } else {
            document.getElementById('totalAmount').textContent = '0';
            document.getElementById('totalInterest').textContent = '0';
            document.getElementById('monthlyInstallment').textContent = '0';
        }
    }

    handleLoanSubmit(e) {
        e.preventDefault();
        
        const customerId = parseInt(document.getElementById('loanCustomer').value);
        const amount = parseFloat(document.getElementById('loanAmount').value);
        const rate = parseFloat(document.getElementById('loanRate').value);
        const duration = parseInt(document.getElementById('loanDuration').value);
        const startDate = document.getElementById('loanStartDate').value;
        const purpose = document.getElementById('loanPurpose').value;
        const guarantorId = parseInt(document.getElementById('loanGuarantor').value);

        // Validation
        if (!customerId || !amount || !rate || !duration || !purpose || !guarantorId) {
            this.showErrorMessage('Please fill all required fields');
            return;
        }

        if (amount < this.data.settings.minLoanAmount || amount > this.data.settings.maxLoanAmount) {
            this.showErrorMessage(`Loan amount must be between ₹${this.data.settings.minLoanAmount.toLocaleString()} and ₹${this.data.settings.maxLoanAmount.toLocaleString()}`);
            return;
        }

        const customer = this.data.customers.find(c => c.id === customerId);
        const guarantor = this.data.guarantors.find(g => g.id === guarantorId);
        const totalInterest = (amount * rate * duration / 100);
        const totalAmount = amount + totalInterest;
        const monthlyInstallment = Math.round(totalAmount / duration);
        
        const newLoan = {
            id: Math.max(...this.data.loans.map(l => l.id)) + 1,
            loanNo: this.generateLoanNumber(),
            customerId: customerId,
            customerName: customer.name,
            amount: amount,
            interestRate: rate,
            duration: duration,
            startDate: startDate,
            installment: monthlyInstallment,
            status: 'active',
            outstandingBalance: totalAmount,
            purpose: purpose,
            guarantorId: guarantorId,
            guarantorName: guarantor.name,
            approvedBy: this.currentUser.id,
            loanOfficer: this.currentUser.id
        };

        this.data.loans.push(newLoan);
        this.closeModal(e);
        this.loadLoans();
        this.updatePaymentLoanDropdown();
        this.showSuccessMessage(`Loan ${newLoan.loanNo} created successfully for ${customer.name}`);
    }

    generateLoanNumber() {
        const year = new Date().getFullYear();
        const count = this.data.loans.filter(loan => loan.loanNo.includes(year)).length + 1;
        return `LN-${year}-${count.toString().padStart(3, '0')}`;
    }

    viewLoanPayments(loanId) {
        const loanPayments = this.data.payments.filter(payment => payment.loanId === loanId);
        const loan = this.data.loans.find(l => l.id === loanId);
        
        if (loanPayments.length === 0) {
            this.showErrorMessage(`No payments found for loan ${loan.loanNo}`);
            return;
        }

        const paymentsList = loanPayments
            .sort((a, b) => new Date(b.paymentDate) - new Date(a.paymentDate))
            .map(payment => 
                `${this.formatDate(payment.paymentDate)}: ₹${payment.amount.toLocaleString()} ${payment.lateFee > 0 ? `(Late Fee: ₹${payment.lateFee})` : ''} - ${payment.paymentMode}`
            ).join('\n');

        alert(`Payment History for ${loan.loanNo}:\n\n${paymentsList}\n\nCurrent Outstanding: ₹${loan.outstandingBalance.toLocaleString()}`);
    }

    viewLoanSchedule(loanId) {
        const loan = this.data.loans.find(l => l.id === loanId);
        if (!loan) return;

        const scheduleHTML = this.generateLoanSchedule(loan);
        document.getElementById('scheduleBody').innerHTML = scheduleHTML;
        document.getElementById('scheduleModal').classList.remove('hidden');
    }

    generateLoanSchedule(loan) {
        const startDate = new Date(loan.startDate);
        const payments = this.data.payments.filter(p => p.loanId === loan.id);
        
        let scheduleHTML = `
            <div class="schedule-summary">
                <h4>${loan.loanNo} - ${loan.customerName}</h4>
                <p><strong>Loan Amount:</strong> ₹${loan.amount.toLocaleString()}</p>
                <p><strong>Interest Rate:</strong> ${loan.interestRate}% per month</p>
                <p><strong>Duration:</strong> ${loan.duration} months</p>
                <p><strong>Monthly EMI:</strong> ₹${loan.installment.toLocaleString()}</p>
            </div>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>EMI No.</th>
                        <th>Due Date</th>
                        <th>EMI Amount</th>
                        <th>Payment Date</th>
                        <th>Paid Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (let i = 1; i <= loan.duration; i++) {
            const dueDate = new Date(startDate.getFullYear(), startDate.getMonth() + i, startDate.getDate());
            const dueDateStr = dueDate.toISOString().split('T')[0];
            const payment = payments.find(p => {
                const paymentDate = new Date(p.paymentDate);
                const paymentMonth = paymentDate.getFullYear() * 12 + paymentDate.getMonth();
                const dueMonth = dueDate.getFullYear() * 12 + dueDate.getMonth();
                return Math.abs(paymentMonth - dueMonth) <= 1;
            });

            let status = 'pending';
            let statusClass = 'info';
            let paymentDate = '-';
            let paidAmount = '-';

            if (payment) {
                status = 'paid';
                statusClass = payment.lateFee > 0 ? 'warning' : 'success';
                paymentDate = this.formatDate(payment.paymentDate);
                paidAmount = `₹${payment.amount.toLocaleString()}`;
                if (payment.lateFee > 0) {
                    paidAmount += ` (+₹${payment.lateFee} late fee)`;
                }
            } else if (dueDate < new Date()) {
                status = 'overdue';
                statusClass = 'error';
            }

            scheduleHTML += `
                <tr>
                    <td>${i}</td>
                    <td>${this.formatDate(dueDateStr)}</td>
                    <td>₹${loan.installment.toLocaleString()}</td>
                    <td>${paymentDate}</td>
                    <td>${paidAmount}</td>
                    <td><span class="status status--${statusClass}">${status}</span></td>
                </tr>
            `;
        }

        scheduleHTML += '</tbody></table>';
        return scheduleHTML;
    }

    openCalculator() {
        const modal = document.getElementById('calculatorModal');
        if (!modal) return;
        
        modal.classList.remove('hidden');
        this.updateCalculator();
    }

    updateCalculator() {
        const amount = parseFloat(document.getElementById('calcAmount').value) || 0;
        const rate = parseFloat(document.getElementById('calcRate').value) || 0;
        const duration = parseInt(document.getElementById('calcDuration').value) || 0;

        if (amount > 0 && rate > 0 && duration > 0) {
            const totalInterest = (amount * rate * duration / 100);
            const totalAmount = amount + totalInterest;
            const monthlyEMI = Math.round(totalAmount / duration);

            document.getElementById('calcEMI').textContent = `₹${monthlyEMI.toLocaleString()}`;
            document.getElementById('calcInterest').textContent = `₹${totalInterest.toLocaleString()}`;
            document.getElementById('calcTotal').textContent = `₹${totalAmount.toLocaleString()}`;
        } else {
            document.getElementById('calcEMI').textContent = '₹0';
            document.getElementById('calcInterest').textContent = '₹0';
            document.getElementById('calcTotal').textContent = '₹0';
        }
    }

    // Enhanced Payment Management
    loadPayments() {
        this.renderPaymentsTable();
        this.updatePaymentLoanDropdown();
    }

    renderPaymentsTable(payments = null) {
        if (!payments) payments = this.data.payments;
        
        const tbody = document.getElementById('paymentsTable');
        if (!tbody) return;
        
        const sortedPayments = payments.sort((a, b) => new Date(b.paymentDate) - new Date(a.paymentDate));

        tbody.innerHTML = sortedPayments.map(payment => {
            const cashier = this.data.users.find(u => u.id === payment.cashierId);
            return `
                <tr>
                    <td><strong>${payment.receiptNo}</strong></td>
                    <td>${this.formatDate(payment.paymentDate)}</td>
                    <td>${payment.customerName}</td>
                    <td>${payment.loanNo}</td>
                    <td>₹${payment.amount.toLocaleString()}</td>
                    <td>${payment.lateFee > 0 ? `₹${payment.lateFee.toLocaleString()}` : '-'}</td>
                    <td><span class="status status--info">${payment.paymentMode}</span></td>
                    <td>₹${payment.outstandingAfter.toLocaleString()}</td>
                    <td>${cashier ? cashier.name : 'N/A'}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn btn--sm btn--outline" onclick="loanManager.showReceipt(${payment.id})">
                                Receipt
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }

    openPaymentModal() {
        const modal = document.getElementById('paymentModal');
        const form = document.getElementById('paymentForm');
        
        if (!modal || !form) return;
        
        form.reset();
        document.getElementById('paymentDate').value = new Date().toISOString().split('T')[0];
        document.getElementById('paymentInfo').classList.add('hidden');
        modal.classList.remove('hidden');
    }

    updatePaymentLoanDropdown() {
        const select = document.getElementById('paymentLoan');
        if (!select) return;
        
        const activeLoans = this.data.loans.filter(loan => loan.status === 'active' && loan.outstandingBalance > 0);
        
        select.innerHTML = '<option value="">Select Loan</option>' + 
            activeLoans.map(loan => 
                `<option value="${loan.id}">${loan.loanNo} - ${loan.customerName} (₹${loan.outstandingBalance.toLocaleString()})</option>`
            ).join('');
    }

    updatePaymentInfo(loanId) {
        const paymentInfo = document.getElementById('paymentInfo');
        
        if (!paymentInfo) return;
        
        if (!loanId) {
            paymentInfo.classList.add('hidden');
            document.getElementById('paymentAmount').max = '';
            return;
        }

        const loan = this.data.loans.find(l => l.id == loanId);
        if (!loan) return;

        // Calculate next due date and overdue information
        const startDate = new Date(loan.startDate);
        const payments = this.data.payments.filter(p => p.loanId == loanId);
        const paidInstallments = payments.length;
        const nextDueMonth = paidInstallments + 1;
        const nextDueDate = new Date(startDate.getFullYear(), startDate.getMonth() + nextDueMonth, startDate.getDate());
        const today = new Date();
        const daysOverdue = Math.max(0, Math.floor((today - nextDueDate) / (1000 * 60 * 60 * 24)));
        
        // Calculate late fee
        const lateFee = daysOverdue > this.data.settings.gracePeriodDays ? this.data.settings.lateFeeAmount : 0;

        document.getElementById('outstandingBalance').textContent = `₹${loan.outstandingBalance.toLocaleString()}`;
        document.getElementById('regularEMI').textContent = `₹${loan.installment.toLocaleString()}`;
        document.getElementById('nextDueDate').textContent = this.formatDate(nextDueDate.toISOString().split('T')[0]);
        document.getElementById('daysOverdue').textContent = daysOverdue;
        document.getElementById('lateFeeAmount').value = lateFee;
        document.getElementById('paymentAmount').max = loan.outstandingBalance;
        
        // Set suggested payment amount
        const suggestedAmount = Math.min(loan.installment + lateFee, loan.outstandingBalance);
        document.getElementById('paymentAmount').value = suggestedAmount;

        if (daysOverdue > 0) {
            document.getElementById('overdueInfo').style.display = 'flex';
        } else {
            document.getElementById('overdueInfo').style.display = 'none';
        }

        paymentInfo.classList.remove('hidden');
    }

    handlePaymentSubmit(e) {
        e.preventDefault();
        
        const loanId = parseInt(document.getElementById('paymentLoan').value);
        const amount = parseFloat(document.getElementById('paymentAmount').value);
        const lateFee = parseFloat(document.getElementById('lateFeeAmount').value) || 0;
        const paymentDate = document.getElementById('paymentDate').value;
        const paymentMode = document.getElementById('paymentMode').value;
        const notes = document.getElementById('paymentNotes').value.trim();

        const loan = this.data.loans.find(l => l.id === loanId);
        
        // Validation
        if (!loanId || !amount || amount <= 0 || amount > loan.outstandingBalance || !paymentMode) {
            this.showErrorMessage('Please fill all required fields with valid values. Payment amount cannot exceed outstanding balance.');
            return;
        }

        const totalPayment = amount + lateFee;
        const newOutstanding = Math.max(0, loan.outstandingBalance - amount);
        
        const newPayment = {
            id: Math.max(...this.data.payments.map(p => p.id)) + 1,
            receiptNo: this.generateReceiptNumber(),
            loanId: loanId,
            loanNo: loan.loanNo,
            customerName: loan.customerName,
            paymentDate: paymentDate,
            dueDate: paymentDate,
            amount: amount,
            lateFee: lateFee,
            paymentMode: paymentMode,
            outstandingAfter: newOutstanding,
            cashierId: this.currentUser.id,
            notes: notes
        };

        // Update loan outstanding balance
        loan.outstandingBalance = newOutstanding;
        if (newOutstanding === 0) {
            loan.status = 'closed';
        }

        this.data.payments.push(newPayment);
        this.closeModal(e);
        this.loadPayments();
        this.showReceipt(newPayment.id);
        this.updatePaymentLoanDropdown();
        this.showSuccessMessage(`Payment of ₹${totalPayment.toLocaleString()} recorded successfully`);
    }

    generateReceiptNumber() {
        const year = new Date().getFullYear();
        const count = this.data.payments.filter(payment => payment.receiptNo.includes(year)).length + 1;
        return `RCP-${year}-${count.toString().padStart(3, '0')}`;
    }

    showPaymentSchedule() {
        const scheduleHTML = this.generateAllPaymentSchedules();
        document.getElementById('scheduleBody').innerHTML = scheduleHTML;
        document.getElementById('scheduleModal').classList.remove('hidden');
    }

    generateAllPaymentSchedules() {
        const activeLoans = this.data.loans.filter(loan => loan.status === 'active');
        const today = new Date();
        const upcomingPayments = [];

        activeLoans.forEach(loan => {
            const startDate = new Date(loan.startDate);
            const payments = this.data.payments.filter(p => p.loanId === loan.id);
            const paidInstallments = payments.length;
            
            for (let i = paidInstallments + 1; i <= Math.min(paidInstallments + 3, loan.duration); i++) {
                const dueDate = new Date(startDate.getFullYear(), startDate.getMonth() + i, startDate.getDate());
                const daysUntilDue = Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));
                
                upcomingPayments.push({
                    loanNo: loan.loanNo,
                    customerName: loan.customerName,
                    dueDate: dueDate,
                    amount: loan.installment,
                    daysUntilDue: daysUntilDue,
                    status: daysUntilDue < 0 ? 'overdue' : (daysUntilDue <= 7 ? 'due-soon' : 'upcoming')
                });
            }
        });

        upcomingPayments.sort((a, b) => a.dueDate - b.dueDate);

        return `
            <div class="schedule-summary">
                <h4>Upcoming Payment Schedule</h4>
                <p>Next ${upcomingPayments.length} payments due</p>
            </div>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Loan ID</th>
                        <th>Customer</th>
                        <th>Due Date</th>
                        <th>Amount</th>
                        <th>Days</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${upcomingPayments.map(payment => {
                        let statusClass = 'info';
                        let statusText = 'Upcoming';
                        
                        if (payment.status === 'overdue') {
                            statusClass = 'error';
                            statusText = `${Math.abs(payment.daysUntilDue)} days overdue`;
                        } else if (payment.status === 'due-soon') {
                            statusClass = 'warning';
                            statusText = `Due in ${payment.daysUntilDue} days`;
                        } else {
                            statusText = `Due in ${payment.daysUntilDue} days`;
                        }

                        return `
                            <tr>
                                <td>${payment.loanNo}</td>
                                <td>${payment.customerName}</td>
                                <td>${this.formatDate(payment.dueDate.toISOString().split('T')[0])}</td>
                                <td>₹${payment.amount.toLocaleString()}</td>
                                <td>${payment.daysUntilDue >= 0 ? payment.daysUntilDue : Math.abs(payment.daysUntilDue)}</td>
                                <td><span class="status status--${statusClass}">${statusText}</span></td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    showReceipt(paymentId) {
        const payment = this.data.payments.find(p => p.id === paymentId);
        if (!payment) return;
        
        const loan = this.data.loans.find(l => l.id === payment.loanId);
        
        const receiptHTML = `
            <div class="receipt-details">
                <div class="receipt-row">
                    <span>Receipt No:</span>
                    <span><strong>${payment.receiptNo}</strong></span>
                </div>
                <div class="receipt-row">
                    <span>Date:</span>
                    <span>${this.formatDate(payment.paymentDate)}</span>
                </div>
                <div class="receipt-row">
                    <span>Customer:</span>
                    <span>${payment.customerName}</span>
                </div>
                <div class="receipt-row">
                    <span>Loan ID:</span>
                    <span>${payment.loanNo}</span>
                </div>
                <div class="receipt-row">
                    <span>Payment Mode:</span>
                    <span>${payment.paymentMode}</span>
                </div>
                <div class="receipt-row">
                    <span>Principal Amount:</span>
                    <span>₹${payment.amount.toLocaleString()}</span>
                </div>
                ${payment.lateFee > 0 ? `
                    <div class="receipt-row">
                        <span>Late Fee:</span>
                        <span>₹${payment.lateFee.toLocaleString()}</span>
                    </div>
                    <div class="receipt-row">
                        <span>Total Paid:</span>
                        <span><strong>₹${(payment.amount + payment.lateFee).toLocaleString()}</strong></span>
                    </div>
                ` : ''}
                <div class="receipt-row">
                    <span>Outstanding Balance:</span>
                    <span>₹${payment.outstandingAfter.toLocaleString()}</span>
                </div>
                ${payment.notes ? `
                    <div class="receipt-row">
                        <span>Notes:</span>
                        <span>${payment.notes}</span>
                    </div>
                ` : ''}
            </div>
        `;

        document.getElementById('receiptDetails').innerHTML = receiptHTML;
        document.getElementById('receiptModal').classList.remove('hidden');
    }

    printReceipt() {
        window.print();
    }

    // Enhanced Reports
    loadReports() {
        this.createMonthlyTrendChart();
    }

    generateDailyReport() {
        const selectedDate = document.getElementById('reportDate').value;
        if (!selectedDate) {
            this.showErrorMessage('Please select a date');
            return;
        }

        const dailyPayments = this.data.payments.filter(payment => payment.paymentDate === selectedDate);
        const totalCollection = dailyPayments.reduce((sum, payment) => sum + payment.amount, 0);
        const totalLateFees = dailyPayments.reduce((sum, payment) => sum + (payment.lateFee || 0), 0);
        const totalAmount = totalCollection + totalLateFees;

        let reportHTML = `
            <h4>Daily Collection Report - ${this.formatDate(selectedDate)}</h4>
            <div class="report-summary">
                <div class="summary-item">
                    <h3>${dailyPayments.length}</h3>
                    <p>Total Payments</p>
                </div>
                <div class="summary-item">
                    <h3>₹${totalCollection.toLocaleString()}</h3>
                    <p>Principal Collection</p>
                </div>
                <div class="summary-item">
                    <h3>₹${totalLateFees.toLocaleString()}</h3>
                    <p>Late Fees</p>
                </div>
                <div class="summary-item">
                    <h3>₹${totalAmount.toLocaleString()}</h3>
                    <p>Total Collection</p>
                </div>
            </div>
        `;

        if (dailyPayments.length > 0) {
            reportHTML += `
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Receipt No</th>
                            <th>Customer</th>
                            <th>Loan ID</th>
                            <th>Amount</th>
                            <th>Late Fee</th>
                            <th>Mode</th>
                            <th>Cashier</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dailyPayments.map(payment => {
                            const cashier = this.data.users.find(u => u.id === payment.cashierId);
                            return `
                                <tr>
                                    <td>${payment.receiptNo}</td>
                                    <td>${payment.customerName}</td>
                                    <td>${payment.loanNo}</td>
                                    <td>₹${payment.amount.toLocaleString()}</td>
                                    <td>₹${(payment.lateFee || 0).toLocaleString()}</td>
                                    <td>${payment.paymentMode}</td>
                                    <td>${cashier ? cashier.name : 'N/A'}</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            `;
        } else {
            reportHTML += '<p>No payments found for this date.</p>';
        }

        document.getElementById('dailyReportResult').innerHTML = reportHTML;
    }

    generateAgingReport() {
        const overdueLoans = this.calculateOverdueLoans();
        const agingBuckets = {
            '1-30': [],
            '31-60': [],
            '61-90': [],
            '90+': []
        };

        overdueLoans.forEach(loan => {
            if (loan.daysOverdue <= 30) {
                agingBuckets['1-30'].push(loan);
            } else if (loan.daysOverdue <= 60) {
                agingBuckets['31-60'].push(loan);
            } else if (loan.daysOverdue <= 90) {
                agingBuckets['61-90'].push(loan);
            } else {
                agingBuckets['90+'].push(loan);
            }
        });

        let reportHTML = `
            <h4>Aging Analysis Report</h4>
            <div class="report-summary">
                <div class="summary-item">
                    <h3>${agingBuckets['1-30'].length}</h3>
                    <p>1-30 Days</p>
                </div>
                <div class="summary-item">
                    <h3>${agingBuckets['31-60'].length}</h3>
                    <p>31-60 Days</p>
                </div>
                <div class="summary-item">
                    <h3>${agingBuckets['61-90'].length}</h3>
                    <p>61-90 Days</p>
                </div>
                <div class="summary-item">
                    <h3>${agingBuckets['90+'].length}</h3>
                    <p>90+ Days</p>
                </div>
            </div>
        `;

        if (overdueLoans.length > 0) {
            reportHTML += `
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Loan ID</th>
                            <th>Customer</th>
                            <th>Outstanding</th>
                            <th>Days Overdue</th>
                            <th>Bucket</th>
                            <th>Late Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${overdueLoans.map(loan => {
                            let bucket = '1-30';
                            if (loan.daysOverdue > 90) bucket = '90+';
                            else if (loan.daysOverdue > 60) bucket = '61-90';
                            else if (loan.daysOverdue > 30) bucket = '31-60';

                            return `
                                <tr>
                                    <td>${loan.loanNo}</td>
                                    <td>${loan.customerName}</td>
                                    <td>₹${loan.outstandingBalance.toLocaleString()}</td>
                                    <td>${loan.daysOverdue}</td>
                                    <td><span class="status status--warning">${bucket} days</span></td>
                                    <td>₹${loan.lateFee.toLocaleString()}</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            `;
        } else {
            reportHTML += '<p>No overdue loans found.</p>';
        }

        document.getElementById('agingReportResult').innerHTML = reportHTML;
    }

    generateOfficerReport() {
        const officerStats = {};
        
        // Initialize officer stats
        this.data.users.forEach(user => {
            officerStats[user.id] = {
                name: user.name,
                totalLoans: 0,
                totalAmount: 0,
                activeLoans: 0,
                closedLoans: 0,
                collections: 0
            };
        });

        // Calculate loan stats
        this.data.loans.forEach(loan => {
            const officerId = loan.loanOfficer || loan.approvedBy;
            if (officerStats[officerId]) {
                officerStats[officerId].totalLoans++;
                officerStats[officerId].totalAmount += loan.amount;
                if (loan.status === 'active') {
                    officerStats[officerId].activeLoans++;
                } else {
                    officerStats[officerId].closedLoans++;
                }
            }
        });

        // Calculate collection stats
        this.data.payments.forEach(payment => {
            const cashierId = payment.cashierId;
            if (officerStats[cashierId]) {
                officerStats[cashierId].collections += payment.amount;
            }
        });

        const reportHTML = `
            <h4>Loan Performance by Officer</h4>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Officer</th>
                        <th>Total Loans</th>
                        <th>Loan Amount</th>
                        <th>Active</th>
                        <th>Closed</th>
                        <th>Collections</th>
                    </tr>
                </thead>
                <tbody>
                    ${Object.values(officerStats).map(officer => `
                        <tr>
                            <td><strong>${officer.name}</strong></td>
                            <td>${officer.totalLoans}</td>
                            <td>₹${officer.totalAmount.toLocaleString()}</td>
                            <td>${officer.activeLoans}</td>
                            <td>${officer.closedLoans}</td>
                            <td>₹${officer.collections.toLocaleString()}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;

        document.getElementById('officerReportResult').innerHTML = reportHTML;
    }

    // Settings
    loadSettings() {
        // Settings are already loaded in the HTML
    }

    handleCompanySettings(e) {
        e.preventDefault();
        
        this.data.settings.companyName = document.getElementById('companyName').value;
        this.data.settings.companyAddress = document.getElementById('companyAddress').value;
        this.data.settings.companyPhone = document.getElementById('companyPhone').value;
        
        this.showSuccessMessage('Company settings updated successfully');
    }

    // Utility functions
    calculateOverdueLoans() {
        const today = new Date();
        const overdueLoans = [];

        this.data.loans.forEach(loan => {
            if (loan.status !== 'active' || loan.outstandingBalance === 0) return;

            const startDate = new Date(loan.startDate);
            const monthsPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24 * 30));
            const payments = this.data.payments.filter(p => p.loanId === loan.id);
            const paidInstallments = payments.length;
            const expectedInstallments = Math.min(monthsPassed + 1, loan.duration);

            if (paidInstallments < expectedInstallments) {
                const lastPayment = payments.sort((a, b) => new Date(b.paymentDate) - new Date(a.paymentDate))[0];
                let daysOverdue = 0;
                
                if (lastPayment) {
                    const lastPaymentDate = new Date(lastPayment.paymentDate);
                    const nextDueDate = new Date(lastPaymentDate);
                    nextDueDate.setMonth(nextDueDate.getMonth() + 1);
                    daysOverdue = Math.max(0, Math.floor((today - nextDueDate) / (1000 * 60 * 60 * 24)));
                } else {
                    const firstDueDate = new Date(startDate);
                    firstDueDate.setMonth(firstDueDate.getMonth() + 1);
                    daysOverdue = Math.max(0, Math.floor((today - firstDueDate) / (1000 * 60 * 60 * 24)));
                }

                if (daysOverdue > 0) {
                    const lateFee = daysOverdue > this.data.settings.gracePeriodDays ? 
                        this.data.settings.lateFeeAmount * Math.floor(daysOverdue / 30) : 0;

                    overdueLoans.push({
                        ...loan,
                        daysOverdue,
                        lateFee
                    });
                }
            }
        });

        return overdueLoans;
    }

    validatePhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-IN');
    }

    downloadCSV(csvContent, filename) {
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    closeModal(e) {
        e.preventDefault();
        const modal = e.target.closest('.modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    showSuccessMessage(message) {
        this.showMessage(message, 'success');
    }

    showErrorMessage(message) {
        this.showMessage(message, 'error');
    }

    showMessage(message, type) {
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `${type}-message`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 2000;
            max-width: 300px;
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 14px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;

        document.body.appendChild(messageDiv);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 5000);
    }

    loadAllData() {
        this.loadCustomers();
        this.loadLoans();
        this.loadPayments();
        this.loadSettings();
        this.updateLoanCustomerDropdown();
        this.updatePaymentLoanDropdown();
        this.updateGuarantorDropdown();
    }
}

// Initialize the enhanced application
const loanManager = new EnhancedLoanManager();