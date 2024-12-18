import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Define the Experience schema
@Schema()
export class Experience {
  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  duration: string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);

// Define the Education schema
@Schema()
export class Education {
  @Prop({ required: true })
  institution: string;

  @Prop({ required: true })
  degree: string;

  @Prop({ required: true })
  graduationYear: number;
}

export const EducationSchema = SchemaFactory.createForClass(Education);

// Define the Candidate schema
@Schema()
export class Candidate {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  cvLink: string;

  @Prop([String])
  skills: string[];

  @Prop({ type: [ExperienceSchema] })
  experiences: Experience[];

  @Prop({ type: [EducationSchema] })
  educations: Education[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const CandidateSchema = SchemaFactory.createForClass(Candidate);
