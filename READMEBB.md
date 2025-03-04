# Models and Services in the Grade Tracking App

## What are Models?

Models are like templates or blueprints that define what information we want to store. In our grade tracking app, we have two main models:

1. **Klasse (Grade) Model**: Defines what information a grade entry contains
   - ID number
   - Subject name
   - Grade value
   - Category it belongs to
   - Whether the course was passed

2. **Kategorie (Category) Model**: Defines what information a category contains
   - Category name (like "Computer Science" or "Economics")

Think of models as empty forms that need to be filled out.

## What are Services?

Services are helpers that manage our data. They create, store, find, update, and delete the actual information in our app. We have two main services:

1. **MyDataService**: Manages all grade entries
   - Stores a list of all grades
   - Can add new grades
   - Can find a specific grade by ID
   - Can delete grades

2. **MyKategorieService**: Manages all categories
   - Stores a list of available categories (Computer Science, Economics, etc.)

Think of services as office workers who handle, organize, and manage filled-out forms.

## How Models and Services Work Together

1. **Creating Data**:
   ```
   The category service creates categories using the Category model
   The grade service creates grades using the Grade model
   ```

   Example: When creating a new Math grade, the app uses the Grade model as a template and the grade service to store it.

2. **Connecting Data**:
   ```
   Each grade belongs to a category
   ```

   Example: A "Physics" grade entry might belong to the "Natural Sciences" category.

3. **Data Flow**:
   ```
   Services → Create and manage data → Components display this data to users
   ```

   Example: When you view your grades list, the grade service provides all grades to the home component, which displays them in a table.

## Code Explanation

### Important Code Snippets Explained

#### Finding a Grade by ID:
```typescript
return this.noten.find((n) => n.id === id);
```

This line searches through the 'noten' array (our list of grade entries) to find a specific grade
- find() is a method that checks each item in the array one by one
- (n) => ... is called an "arrow function" which tells find() what to check for
- n is each grade entry we're currently looking at during the search
- n.id === id checks if the ID of the current grade entry matches the ID we're looking for
- When a match is found, that grade entry is immediately returned as the result
- If no match is found after checking all entries, undefined is returned (meaning "not found")
- In simple terms: "Look through all my grades and give me back the one with this specific ID"

#### Deleting a Grade:
```typescript
this.noten = this.noten.filter((n) => n.id !== note.id);
```

This line removes a specific grade entry from our list of grades (the 'noten' array)
- filter() creates a new array containing only items that pass a certain test
- (n) => ... is an arrow function that defines the test for each item
- n is each grade entry we look at during the filtering process
- n.id !== note.id checks if the current grade's ID is NOT equal to the ID we want to delete
- Only grades that pass this test (have different IDs) will be kept in the new array
- We then assign this new filtered array back to this.noten, replacing the original array
- In simple terms: "Create a new list with all grades EXCEPT the one with the ID we want to delete"

Think of it like a school office:
- Models are the blank forms (one for student grades, one for subject categories)
- Services are the office staff who fill out, file, retrieve, and organize these forms
- The grade service can look up which category a subject belongs to by asking the category service