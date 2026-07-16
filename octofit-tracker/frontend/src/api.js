/**
 * API utilities for Octofit Tracker frontend
 * 
 * NOTE: VITE_CODESPACE_NAME must be defined in .env.local
 * Example: VITE_CODESPACE_NAME=your-codespace-name
 */

const getApiBaseUrl = () => {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  
  if (codespaceName && codespaceName !== 'undefined') {
    return `https://${codespaceName}-8000.app.github.dev/api`;
  }
  
  // Fallback to localhost for local development
  return 'http://localhost:8000/api';
};

export const apiClient = {
  baseUrl: getApiBaseUrl(),
  
  async fetchUsers() {
    try {
      const response = await fetch(`${this.baseUrl}/users`);
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      return data.data || data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  },

  async fetchActivities() {
    try {
      const response = await fetch(`${this.baseUrl}/activities`);
      if (!response.ok) throw new Error('Failed to fetch activities');
      const data = await response.json();
      return data.data || data;
    } catch (error) {
      console.error('Error fetching activities:', error);
      return [];
    }
  },

  async fetchTeams() {
    try {
      const response = await fetch(`${this.baseUrl}/teams`);
      if (!response.ok) throw new Error('Failed to fetch teams');
      const data = await response.json();
      return data.data || data;
    } catch (error) {
      console.error('Error fetching teams:', error);
      return [];
    }
  },

  async fetchLeaderboard() {
    try {
      const response = await fetch(`${this.baseUrl}/leaderboard`);
      if (!response.ok) throw new Error('Failed to fetch leaderboard');
      const data = await response.json();
      return data.data || data;
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      return [];
    }
  },

  async fetchWorkouts() {
    try {
      const response = await fetch(`${this.baseUrl}/workouts`);
      if (!response.ok) throw new Error('Failed to fetch workouts');
      const data = await response.json();
      return data.data || data;
    } catch (error) {
      console.error('Error fetching workouts:', error);
      return [];
    }
  },
};

export default apiClient;
