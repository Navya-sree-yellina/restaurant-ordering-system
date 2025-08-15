# /spec-create

Create a comprehensive specification for a new restaurant feature.

## Usage
```
/spec-create [feature-name] "[description]"
```

## Example
```
/spec-create online-reservations "Table reservation system for customers"
```

## Process

1. **Load Context**
   - Read all steering documents (product.md, tech.md, structure.md)
   - Understand current system architecture
   - Review existing patterns and standards

2. **Generate Requirements**
   - Create user stories with acceptance criteria
   - Define functional requirements
   - Specify non-functional requirements
   - Document API endpoints needed
   - List dependencies and constraints

3. **Create Design Specification**
   - Technical architecture diagrams
   - Component structure
   - Data models and schemas
   - Integration points
   - Security considerations

4. **Break Down Tasks**
   - Create atomic, implementable tasks
   - Estimate effort for each task
   - Define task dependencies
   - Set implementation order

5. **Output Files**
   - `.claude/specs/[feature-name]/requirements.md`
   - `.claude/specs/[feature-name]/design.md`
   - `.claude/specs/[feature-name]/tasks.md`

## Template Structure

The command uses these templates:
- `/templates/spec-requirements.md` - Requirements documentation
- `/templates/spec-design.md` - Technical design
- `/templates/spec-tasks.md` - Task breakdown

## Options

- `--type [feature|enhancement|refactor]` - Specification type
- `--priority [high|medium|low]` - Feature priority
- `--scope [frontend|backend|fullstack]` - Technical scope
- `--sprint [number]` - Target sprint

## Success Criteria

✅ Requirements cover all user stories
✅ Design addresses technical challenges
✅ Tasks are atomic and clear
✅ Documentation is complete
✅ Estimates are realistic