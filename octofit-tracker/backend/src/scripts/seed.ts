import mongoose from 'mongoose';
import User from '../models/User';
import Team from '../models/Team';
import Activity from '../models/Activity';
import Leaderboard from '../models/Leaderboard';
import Workout from '../models/Workout';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to octofit_db');

    // Clear existing data
    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Leaderboard.deleteMany({});
    await Workout.deleteMany({});
    console.log('Cleared existing data');

    // Create sample users
    const users = await User.create([
      {
        username: 'alex_runner',
        email: 'alex@example.com',
        name: 'Alex Johnson',
        totalActivities: 25,
        totalPoints: 2500,
      },
      {
        username: 'jordan_cyclist',
        email: 'jordan@example.com',
        name: 'Jordan Smith',
        totalActivities: 18,
        totalPoints: 1800,
      },
      {
        username: 'casey_swimmer',
        email: 'casey@example.com',
        name: 'Casey Williams',
        totalActivities: 22,
        totalPoints: 2200,
      },
      {
        username: 'morgan_gym',
        email: 'morgan@example.com',
        name: 'Morgan Brown',
        totalActivities: 20,
        totalPoints: 2000,
      },
      {
        username: 'taylor_yoga',
        email: 'taylor@example.com',
        name: 'Taylor Davis',
        totalActivities: 15,
        totalPoints: 1500,
      },
    ]);
    console.log(`Created ${users.length} users`);

    // Create sample teams
    const teams = await Team.create([
      {
        name: 'Octofitness Elite',
        description: 'Top tier fitness team',
        members: [users[0]._id, users[1]._id, users[2]._id],
        leader: users[0]._id,
        totalPoints: 6500,
      },
      {
        name: 'Healthy Habits',
        description: 'Building healthy lifestyle together',
        members: [users[3]._id, users[4]._id],
        leader: users[3]._id,
        totalPoints: 3500,
      },
    ]);
    console.log(`Created ${teams.length} teams`);

    // Create sample activities
    const activities = await Activity.create([
      {
        user: users[0]._id,
        type: 'running',
        duration: 45,
        distance: 7.2,
        calories: 620,
        points: 250,
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      },
      {
        user: users[0]._id,
        type: 'running',
        duration: 30,
        distance: 5.0,
        calories: 420,
        points: 150,
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      },
      {
        user: users[1]._id,
        type: 'cycling',
        duration: 60,
        distance: 25.0,
        calories: 800,
        points: 300,
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      },
      {
        user: users[2]._id,
        type: 'swimming',
        duration: 50,
        distance: 2.5,
        calories: 550,
        points: 200,
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      },
      {
        user: users[3]._id,
        type: 'gym',
        duration: 90,
        calories: 950,
        points: 350,
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      },
      {
        user: users[4]._id,
        type: 'yoga',
        duration: 45,
        calories: 250,
        points: 100,
        date: new Date(Date.now() - 0 * 24 * 60 * 60 * 1000),
      },
    ]);
    console.log(`Created ${activities.length} activities`);

    // Create leaderboard entries
    const leaderboardEntries = await Leaderboard.create([
      {
        user: users[0]._id,
        team: teams[0]._id,
        totalPoints: 2500,
        totalActivities: 25,
        rank: 1,
      },
      {
        user: users[2]._id,
        team: teams[0]._id,
        totalPoints: 2200,
        totalActivities: 22,
        rank: 2,
      },
      {
        user: users[1]._id,
        team: teams[0]._id,
        totalPoints: 1800,
        totalActivities: 18,
        rank: 3,
      },
      {
        user: users[3]._id,
        team: teams[1]._id,
        totalPoints: 2000,
        totalActivities: 20,
        rank: 4,
      },
      {
        user: users[4]._id,
        team: teams[1]._id,
        totalPoints: 1500,
        totalActivities: 15,
        rank: 5,
      },
    ]);
    console.log(`Created ${leaderboardEntries.length} leaderboard entries`);

    // Create sample workouts
    const workouts = await Workout.create([
      {
        user: users[0]._id,
        name: 'Morning Run',
        description: 'Easy pace run to start the day',
        exercises: [
          { name: 'Warm-up jog', duration: 5 },
          { name: 'Main run', duration: 35 },
          { name: 'Cool-down walk', duration: 5 },
        ],
        difficulty: 'beginner',
        estimatedDuration: 45,
      },
      {
        user: users[1]._id,
        name: 'Road Bike Adventure',
        description: 'Long distance cycling workout',
        exercises: [
          { name: 'Warm-up', duration: 10 },
          { name: 'Steady pace', duration: 40 },
          { name: 'Sprint intervals', duration: 10 },
        ],
        difficulty: 'intermediate',
        estimatedDuration: 60,
      },
      {
        user: users[3]._id,
        name: 'Full Body Strength',
        description: 'Comprehensive strength training session',
        exercises: [
          { name: 'Squats', sets: 4, reps: 8 },
          { name: 'Bench Press', sets: 4, reps: 8 },
          { name: 'Deadlifts', sets: 3, reps: 6 },
          { name: 'Pull-ups', sets: 3, reps: 10 },
        ],
        difficulty: 'advanced',
        estimatedDuration: 90,
      },
      {
        user: users[4]._id,
        name: 'Relaxing Yoga Session',
        description: 'Gentle yoga for flexibility and peace',
        exercises: [
          { name: 'Warm-up stretches', duration: 5 },
          { name: 'Asana flow', duration: 35 },
          { name: 'Meditation', duration: 5 },
        ],
        difficulty: 'beginner',
        estimatedDuration: 45,
      },
    ]);
    console.log(`Created ${workouts.length} workouts`);

    console.log('\n✅ Database seeding complete!');
    console.log(`📊 Summary:`);
    console.log(`   Users: ${users.length}`);
    console.log(`   Teams: ${teams.length}`);
    console.log(`   Activities: ${activities.length}`);
    console.log(`   Leaderboard entries: ${leaderboardEntries.length}`);
    console.log(`   Workouts: ${workouts.length}\n`);

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
